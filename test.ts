import {
	assert,
	assertEquals,
} from "https://deno.land/std/testing/asserts.ts";

import WASI from "./mod.ts";

if (import.meta.main) {
	const bin = await Deno.readFile(Deno.args[0]);
	const mod = await WebAssembly.compile(bin);

	const wasi = new WASI({
		env: Deno.env.toObject(),
		args: Deno.args.slice(1),
		preopens: {
			"/fixture": "testdata/fixture",
			"/tmp": Deno.makeTempDirSync(),
		},
	});

	const instance = new WebAssembly.Instance(mod, {
		wasi_snapshot_preview1: wasi.exports,
	});

	wasi.memory = instance.exports.memory;

	instance.exports._start();
	Deno.exit(0);
}

for await (const entry of Deno.readDir("testdata/c")) {
	if (!entry.name.endsWith(".c")) {
		continue;
	}

	Deno.test(entry.name, async function() {
		const sourcePath = `testdata/c/${entry.name}`;

		const moduleSource = await Deno.readTextFile(sourcePath);
		const moduleHeader = moduleSource.match(/^\/\/.*/);
		const moduleOptions = JSON.parse(moduleHeader ? moduleHeader[0].slice(2) : "{}");
		const modulePath = sourcePath.replace(/.c$/, ".wasm");

		const compilerProcess = await Deno.run({
			cmd: ["clang", "-target", "wasm32-wasi", "-o", modulePath, sourcePath],
			stdout: "inherit",
			stderr: "inherit",
		});

		const compilerStatus = await compilerProcess.status();
		assertEquals(compilerStatus.success, true);

		compilerProcess.close()

		const moduleProcess = await Deno.run({
			cmd: ["deno", "run", "--v8-flags=--experimental-wasm-bigint", "-q", "-A", "test.ts", modulePath, ...(moduleOptions.args ? moduleOptions.args : [])],
			env: moduleOptions.env ? moduleOptions.env : {},
			stdin: "piped",
			stdout: "piped",
			stderr: "piped",
		});

		if (moduleProcess.stdin) {
			if (moduleOptions.stdin) {
				const data = new TextEncoder().encode(moduleOptions.stdin);
				await Deno.writeAll(moduleProcess.stdin, data);
			}

			moduleProcess.stdin.close();
		}

		if (moduleProcess.stdout) {
			const actual = new TextDecoder().decode(await Deno.readAll(moduleProcess.stdout));
			const expected = moduleOptions.stdout ? moduleOptions.stdout : "";

			assertEquals(actual, expected);

			moduleProcess.stdout.close();
		}

		if (moduleProcess.stderr) {
			const actual = new TextDecoder().decode(await Deno.readAll(moduleProcess.stderr));
			const expected = moduleOptions.stderr ? moduleOptions.stderr : "";

			assertEquals(actual, expected);

			moduleProcess.stderr.close();
		}

		const moduleStatus = await moduleProcess.status();
		assertEquals(moduleStatus.code, moduleOptions.code ? moduleOptions.code : 0);

		moduleProcess.close()
	});
}
