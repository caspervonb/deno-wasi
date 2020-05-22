import {
	assertEquals,
	assertNotEquals,
} from "https://deno.land/std/testing/asserts.ts";

import {
	Module,
} from "./mod.ts";

Deno.test("args_get", function() : void {
	const module = new Module({
		memory: new WebAssembly.Memory({ initial: 1 }),
	});

	const text = new TextDecoder();
	const heap = new Uint8Array(module.memory.buffer);
	const view = new DataView(module.memory.buffer);

	assertEquals(module.exports.args_get(0, 4), 0);
	assertEquals(view.getUint32(0, true), 0);
	assertEquals(view.getUint32(4, true), 0);

	module.args = [];
	assertEquals(module.exports.args_get(0, 4), 0);
	assertEquals(view.getUint32(0, true), 0);
	assertEquals(view.getUint32(4, true), 0);

	module.args = ["one"];
	assertEquals(module.exports.args_get(0, 4), 0);
	assertEquals(view.getUint32(0, true), 4);
	assertEquals(text.decode(new Uint8Array(module.memory.buffer, 4, 4)), "one\0");

	module.args = ["one", "two"];
	assertEquals(module.exports.args_get(0, 8), 0);
	assertEquals(view.getUint32(0, true), 8);
	assertEquals(view.getUint32(4, true), 12);
	assertEquals(text.decode(new Uint8Array(module.memory.buffer, 8, 4)), "one\0");
	assertEquals(text.decode(new Uint8Array(module.memory.buffer, 12, 4)), "two\0");

	module.args = ["one", "two", "three"];
	assertEquals(module.exports.args_get(0, 12), 0);
	assertEquals(view.getUint32(0, true), 12);
	assertEquals(view.getUint32(4, true), 16);
	assertEquals(view.getUint32(8, true), 20);
	assertEquals(text.decode(new Uint8Array(module.memory.buffer, 12, 4)), "one\0");
	assertEquals(text.decode(new Uint8Array(module.memory.buffer, 16, 4)), "two\0");
	assertEquals(text.decode(new Uint8Array(module.memory.buffer, 20, 6)), "three\0");
});

Deno.test("args_sizes_get", function() : void {
	const module = new Module({
		memory: new WebAssembly.Memory({ initial: 1 }),
	});

	const view = new DataView(module.memory.buffer);

	assertEquals(module.exports.args_sizes_get(0, 4), 0);
	assertEquals(view.getUint32(0, true), 0);
	assertEquals(view.getUint32(0, true), 0);

	module.args = [];
	assertEquals(module.exports.args_sizes_get(0, 4), 0);
	assertEquals(view.getUint32(0, true), 0);
	assertEquals(view.getUint32(0, true), 0);

	module.args = ["one"];
	assertEquals(module.exports.args_sizes_get(0, 4), 0);
	assertEquals(view.getUint32(0, true), 1);
	assertEquals(view.getUint32(4, true), 4);

	module.args = ["one", "two"];
	assertEquals(module.exports.args_sizes_get(0, 4), 0);
	assertEquals(view.getUint32(0, true), 2);
	assertEquals(view.getUint32(4, true), 8);

	module.args = ["one", "two", "three"];
	assertEquals(module.exports.args_sizes_get(0, 4), 0);
	assertEquals(view.getUint32(0, true), 3);
	assertEquals(view.getUint32(4, true), 14);
});

Deno.test("environ_get", function() : void {
	const module = new Module({
		memory: new WebAssembly.Memory({ initial: 1 }),
	});

	const text = new TextDecoder();
	const heap = new Uint8Array(module.memory.buffer);
	const view = new DataView(module.memory.buffer);

	assertEquals(module.exports.environ_get(0, 4), 0);
	assertEquals(view.getUint32(0, true), 0);
	assertEquals(view.getUint32(4, true), 0);

	module.env = {};
	assertEquals(module.exports.environ_get(0, 4), 0);
	assertEquals(view.getUint32(0, true), 0);
	assertEquals(view.getUint32(4, true), 0);

	module.env = {"one": "1"};
	assertEquals(module.exports.environ_get(0, 4), 0);
	assertEquals(view.getUint32(0, true), 4);
	assertEquals(text.decode(new Uint8Array(module.memory.buffer, 4, 6)), "one=1\0");

	module.env = {"one": "1", "two": "2"};
	assertEquals(module.exports.environ_get(0, 8), 0);
	assertEquals(view.getUint32(0, true), 8);
	assertEquals(view.getUint32(4, true), 14);
	assertEquals(text.decode(new Uint8Array(module.memory.buffer, 8, 6)), "one=1\0");
	assertEquals(text.decode(new Uint8Array(module.memory.buffer, 14, 6)), "two=2\0");

	module.env = {"one": "1", "two": "2", "three": "3"};
	assertEquals(module.exports.environ_get(0, 12), 0);
	assertEquals(view.getUint32(0, true), 12);
	assertEquals(view.getUint32(4, true), 18);
	assertEquals(view.getUint32(8, true), 24);
	assertEquals(text.decode(new Uint8Array(module.memory.buffer, 12, 6)), "one=1\0");
	assertEquals(text.decode(new Uint8Array(module.memory.buffer, 18, 6)), "two=2\0");
	assertEquals(text.decode(new Uint8Array(module.memory.buffer, 24, 8)), "three=3\0");
});

Deno.test("environ_sizes_get", function() : void {
	const module = new Module({
		memory: new WebAssembly.Memory({ initial: 1 }),
	});

	const view = new DataView(module.memory.buffer);

	assertEquals(module.exports.environ_sizes_get(0, 4), 0);
	assertEquals(view.getUint32(0, true), 0);
	assertEquals(view.getUint32(0, true), 0);

	module.env = {};
	assertEquals(module.exports.environ_sizes_get(0, 4), 0);
	assertEquals(view.getUint32(0, true), 0);
	assertEquals(view.getUint32(0, true), 0);

	module.env = {"one": "1"};
	assertEquals(module.exports.environ_sizes_get(0, 4), 0);
	assertEquals(view.getUint32(0, true), 1);
	assertEquals(view.getUint32(4, true), 6);

	module.env = {"one": "1", "two": "2"};
	assertEquals(module.exports.environ_sizes_get(0, 4), 0);
	assertEquals(view.getUint32(0, true), 2);
	assertEquals(view.getUint32(4, true), 12);

	module.env = {"one": "1", "two": "2", "three": "3"};
	assertEquals(module.exports.environ_sizes_get(0, 4), 0);
	assertEquals(view.getUint32(0, true), 3);
	assertEquals(view.getUint32(4, true), 20);
});

Deno.test("clock_res_get", function() : void {
	const module = new Module({
		memory: new WebAssembly.Memory({ initial: 1 }),
	});

	const view = new DataView(module.memory.buffer);

	assertEquals(module.exports.clock_res_get(-1, 8), 28);
	assertEquals(module.exports.clock_res_get(4, 8), 28);

	assertEquals(module.exports.clock_res_get(0, 8), 0);
	assertNotEquals(view.getBigUint64(8), 0);

	assertEquals(module.exports.clock_res_get(1, 8), 0);
	assertNotEquals(view.getBigUint64(8), 0);

	assertEquals(module.exports.clock_res_get(2, 8), 0);
	assertNotEquals(view.getBigUint64(8), 0);

	assertEquals(module.exports.clock_res_get(3, 8), 0);
	assertNotEquals(view.getBigUint64(8), 0);
});

Deno.test("clock_time_get", function() {
	const module = new Module({
		memory: new WebAssembly.Memory({ initial: 1 }),
	});

	const view = new DataView(module.memory.buffer);

	assertEquals(module.exports.clock_time_get(-1, 0, 8), 28);
	assertEquals(module.exports.clock_time_get(4, 0, 8), 28);

	assertEquals(module.exports.clock_time_get(0, 0, 8), 0);
	assertNotEquals(view.getBigUint64(8, true), 0);
	assertEquals(module.exports.clock_time_get(0, 1, 8), 0);
	assertNotEquals(view.getBigUint64(8, true), 0);

	assertEquals(module.exports.clock_time_get(1, 0, 8), 0);
	assertNotEquals(view.getBigUint64(8, true), 0);
	assertEquals(module.exports.clock_time_get(1, 1, 8), 0);
	assertNotEquals(view.getBigUint64(8, true), 0);

	assertEquals(module.exports.clock_time_get(2, 0, 8), 0);
	assertNotEquals(view.getBigUint64(8, true), 0);
	assertEquals(module.exports.clock_time_get(2, 1, 8), 0);
	assertNotEquals(view.getBigUint64(8, true), 0);

	assertEquals(module.exports.clock_time_get(3, 0, 8), 0);
	assertNotEquals(view.getBigUint64(8, true), 0);
	assertEquals(module.exports.clock_time_get(3, 1, 8), 0);
	assertNotEquals(view.getBigUint64(8, true), 0);
});

Deno.test("fd_close", function() {
	const module = new Module({
		memory: new WebAssembly.Memory({ initial: 1 }),
	});

	module.descriptors = [
		{
			handle: {
				close: function() {
				},
			}
		}
	];

	assertEquals(module.exports.fd_close(-1), 8);
	assertEquals(module.exports.fd_close(0), 0);
	assertEquals(module.exports.fd_close(0), 8);
});

Deno.test("fd_read", function() {
	const module = new Module({
		memory: new WebAssembly.Memory({ initial: 1 }),
	});

	module.descriptors = [
		{
			handle: {
				readSync: function(buffer : Uint8Array) {
					return 0;
				},
			}
		}
	];

	assertEquals(module.exports.fd_read(-1, 8, 1, 0), 8);
	assertEquals(module.exports.fd_read(0, 8, 1, 0), 0);
});

Deno.test("proc_exit", async function() {
	const script = `
		import Module from "./mod.ts";

		const module = new Module({
			memory: new WebAssembly.Memory({ initial: 1 }),
		});

		module.exports.proc_exit(1);
	`;

	const process = await Deno.run({ cmd: ["deno", "eval", script] });
	const status = await process.status();
	assertEquals(status.success, false);
	assertEquals(status.code, 1);

	process.close();
});

Deno.test("random_get", function() {
	const module = new Module({
		memory: new WebAssembly.Memory({ initial: 1 }),
	});

	const heap = new Uint8Array(module.memory.buffer);

	assertEquals(module.exports.random_get(0, 0), 0);
	assertEquals(module.exports.random_get(0, 1), 0);
	assertEquals(module.exports.random_get(0, 2), 0);
	assertEquals(module.exports.random_get(0, 4), 0);
	assertEquals(module.exports.random_get(0, 8), 0);
	assertEquals(module.exports.random_get(0, 16), 0);
	assertEquals(module.exports.random_get(0, 32), 0);
	assertEquals(module.exports.random_get(0, 64), 0);
	assertEquals(module.exports.random_get(0, 128), 0);
	assertEquals(module.exports.random_get(0, 256), 0);
	assertEquals(module.exports.random_get(0, 512), 0);
	assertEquals(module.exports.random_get(0, 1024), 0);
});
