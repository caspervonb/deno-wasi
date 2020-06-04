import WASI from "../mod.ts";

const bin = await Deno.readFile(Deno.args[0]);
const mod = await WebAssembly.compile(bin);

const wasi = new WASI({
	env: Deno.env.toObject(),
	args: Deno.args.slice(1),
});

const instance = new WebAssembly.Instance(mod, {
	wasi_snapshot_preview1: wasi.exports,
});

wasi.memory = instance.exports.memory;

instance.exports._start();
