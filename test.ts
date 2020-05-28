import {
	assertEquals,
	assertNotEquals,
} from "https://deno.land/std/testing/asserts.ts";

import {
	Module,
} from "./mod.ts";

Deno.test("args_get with no command arguments", function() : void {
	const module = new Module({
		memory: new WebAssembly.Memory({ initial: 1 }),
	});

	const view = new DataView(module.memory.buffer);

	assertEquals(module.exports.args_get(0, 4), 0);
	assertEquals(view.getUint32(0, true), 0);
	assertEquals(view.getUint32(4, true), 0);
});

Deno.test("args_get with one command argument", function() : void {
	const module = new Module({
		args: ["one"],
		memory: new WebAssembly.Memory({ initial: 1 }),
	});

	const text = new TextDecoder();
	const heap = new Uint8Array(module.memory.buffer);
	const view = new DataView(module.memory.buffer);

	assertEquals(module.exports.args_get(0, 4), 0);
	assertEquals(view.getUint32(0, true), 4);
	assertEquals(text.decode(new Uint8Array(module.memory.buffer, 4, 4)), "one\0");
});

Deno.test("args_get with two command arguments", function() : void {
	const module = new Module({
		args: ["one", "two"],
		memory: new WebAssembly.Memory({ initial: 1 }),
	});

	const text = new TextDecoder();
	const heap = new Uint8Array(module.memory.buffer);
	const view = new DataView(module.memory.buffer);

	assertEquals(module.exports.args_get(0, 8), 0);
	assertEquals(view.getUint32(0, true), 8);
	assertEquals(view.getUint32(4, true), 12);
	assertEquals(text.decode(new Uint8Array(module.memory.buffer, 8, 4)), "one\0");
	assertEquals(text.decode(new Uint8Array(module.memory.buffer, 12, 4)), "two\0");
});

Deno.test("args_get with three command arguments", function() : void {
	const module = new Module({
		args: ["one", "two", "three"],
		memory: new WebAssembly.Memory({ initial: 1 }),
	});

	const text = new TextDecoder();
	const heap = new Uint8Array(module.memory.buffer);
	const view = new DataView(module.memory.buffer);

	assertEquals(module.exports.args_get(0, 12), 0);
	assertEquals(view.getUint32(0, true), 12);
	assertEquals(view.getUint32(4, true), 16);
	assertEquals(view.getUint32(8, true), 20);
	assertEquals(text.decode(new Uint8Array(module.memory.buffer, 12, 4)), "one\0");
	assertEquals(text.decode(new Uint8Array(module.memory.buffer, 16, 4)), "two\0");
	assertEquals(text.decode(new Uint8Array(module.memory.buffer, 20, 6)), "three\0");
});

Deno.test("args_sizes_get with no command arguments", function() : void {
	const module = new Module({
		memory: new WebAssembly.Memory({ initial: 1 }),
	});

	const view = new DataView(module.memory.buffer);

	assertEquals(module.exports.args_sizes_get(0, 4), 0);
	assertEquals(view.getUint32(0, true), 0);
	assertEquals(view.getUint32(0, true), 0);
});

Deno.test("args_sizes_get with one command argument", function() : void {
	const module = new Module({
		args: ["one"],
		memory: new WebAssembly.Memory({ initial: 1 }),
	});

	const view = new DataView(module.memory.buffer);

	assertEquals(module.exports.args_sizes_get(0, 4), 0);
	assertEquals(view.getUint32(0, true), 1);
	assertEquals(view.getUint32(4, true), 4);
});

Deno.test("args_sizes_get with two command arguments", function() : void {
	const module = new Module({
		args: ["one", "two"],
		memory: new WebAssembly.Memory({ initial: 1 }),
	});

	const view = new DataView(module.memory.buffer);

	assertEquals(module.exports.args_sizes_get(0, 4), 0);
	assertEquals(view.getUint32(0, true), 2);
	assertEquals(view.getUint32(4, true), 8);
});

Deno.test("args_sizes_get with three command arguments", function() : void {
	const module = new Module({
		args: ["one", "two", "three"],
		memory: new WebAssembly.Memory({ initial: 1 }),
	});

	const view = new DataView(module.memory.buffer);

	assertEquals(module.exports.args_sizes_get(0, 4), 0);
	assertEquals(view.getUint32(0, true), 3);
	assertEquals(view.getUint32(4, true), 14);
});

Deno.test("environ_get with no environment variables", function() : void {
	const module = new Module({
		memory: new WebAssembly.Memory({ initial: 1 }),
	});

	const view = new DataView(module.memory.buffer);

	assertEquals(module.exports.environ_get(0, 4), 0);
	assertEquals(view.getUint32(0, true), 0);
	assertEquals(view.getUint32(4, true), 0);
});

Deno.test("environ_get with one environment variable", function() : void {
	const module = new Module({
		env: { "one": "1" },
		memory: new WebAssembly.Memory({ initial: 1 }),
	});

	const text = new TextDecoder();
	const heap = new Uint8Array(module.memory.buffer);
	const view = new DataView(module.memory.buffer);

	assertEquals(module.exports.environ_get(0, 4), 0);
	assertEquals(view.getUint32(0, true), 4);
	assertEquals(text.decode(new Uint8Array(module.memory.buffer, 4, 6)), "one=1\0");
});

Deno.test("environ_get with two environment variables", function() : void {
	const module = new Module({
		env: { "one": "1", "two": "2" },
		memory: new WebAssembly.Memory({ initial: 1 }),
	});

	const text = new TextDecoder();
	const heap = new Uint8Array(module.memory.buffer);
	const view = new DataView(module.memory.buffer);

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

Deno.test("environ_get with three environment variables", function() : void {
	const module = new Module({
		env: { "one": "1", "two": "2", "three": "3" },
		memory: new WebAssembly.Memory({ initial: 1 }),
	});

	const text = new TextDecoder();
	const heap = new Uint8Array(module.memory.buffer);
	const view = new DataView(module.memory.buffer);

	assertEquals(module.exports.environ_get(0, 12), 0);
	assertEquals(view.getUint32(0, true), 12);
	assertEquals(view.getUint32(4, true), 18);
	assertEquals(view.getUint32(8, true), 24);
	assertEquals(text.decode(new Uint8Array(module.memory.buffer, 12, 6)), "one=1\0");
	assertEquals(text.decode(new Uint8Array(module.memory.buffer, 18, 6)), "two=2\0");
	assertEquals(text.decode(new Uint8Array(module.memory.buffer, 24, 8)), "three=3\0");
});

Deno.test("environ_sizes_get with no environment variables", function() : void {
	const module = new Module({
		memory: new WebAssembly.Memory({ initial: 1 }),
	});

	const view = new DataView(module.memory.buffer);

	assertEquals(module.exports.environ_sizes_get(0, 4), 0);
	assertEquals(view.getUint32(0, true), 0);
	assertEquals(view.getUint32(0, true), 0);
});

Deno.test("environ_sizes_get with one environment variables", function() : void {
	const module = new Module({
		env: { "one": "1" },
		memory: new WebAssembly.Memory({ initial: 1 }),
	});

	const view = new DataView(module.memory.buffer);

	assertEquals(module.exports.environ_sizes_get(0, 4), 0);
	assertEquals(view.getUint32(0, true), 1);
	assertEquals(view.getUint32(4, true), 6);
});

Deno.test("environ_sizes_get with two environment variables", function() : void {
	const module = new Module({
		env: { "one": "1", "two": "2" },
		memory: new WebAssembly.Memory({ initial: 1 }),
	});

	const view = new DataView(module.memory.buffer);

	assertEquals(module.exports.environ_sizes_get(0, 4), 0);
	assertEquals(view.getUint32(0, true), 2);
	assertEquals(view.getUint32(4, true), 12);
});

Deno.test("environ_sizes_get with three environment variables", function() : void {
	const module = new Module({
		env: { "one": "1", "two": "2", "three": "3" },
		memory: new WebAssembly.Memory({ initial: 1 }),
	});

	const view = new DataView(module.memory.buffer);

	assertEquals(module.exports.environ_sizes_get(0, 4), 0);
	assertEquals(view.getUint32(0, true), 3);
	assertEquals(view.getUint32(4, true), 20);
});

Deno.test("clock_res_get with an invalid clock identifier", function() : void {
	const module = new Module({
		memory: new WebAssembly.Memory({ initial: 1 }),
	});

	assertEquals(module.exports.clock_res_get(-1, 8), 28);
	assertEquals(module.exports.clock_res_get(4, 8), 28);
});

Deno.test("clock_res_get with the realtime clock identifier", function() : void {
	const module = new Module({
		memory: new WebAssembly.Memory({ initial: 1 }),
	});

	const view = new DataView(module.memory.buffer);

	assertEquals(module.exports.clock_res_get(0, 8), 0);
	assertNotEquals(view.getBigUint64(8), 0);
});

Deno.test("clock_res_get with the monotonic clock identifier", function() : void {
	const module = new Module({
		memory: new WebAssembly.Memory({ initial: 1 }),
	});

	const view = new DataView(module.memory.buffer);

	assertEquals(module.exports.clock_res_get(1, 8), 0);
	assertNotEquals(view.getBigUint64(8), 0);
});

Deno.test("clock_res_get with the process clock identifier", function() : void {
	const module = new Module({
		memory: new WebAssembly.Memory({ initial: 1 }),
	});

	const view = new DataView(module.memory.buffer);

	assertEquals(module.exports.clock_res_get(2, 8), 0);
	assertNotEquals(view.getBigUint64(8), 0);
});

Deno.test("clock_res_get with the thread clock identifier", function() : void {
	const module = new Module({
		memory: new WebAssembly.Memory({ initial: 1 }),
	});

	const view = new DataView(module.memory.buffer);

	assertEquals(module.exports.clock_res_get(3, 8), 0);
	assertNotEquals(view.getBigUint64(8), 0);
});

Deno.test("clock_time_get with an invalid clock identifier", function() {
	const module = new Module({
		memory: new WebAssembly.Memory({ initial: 1 }),
	});

	assertEquals(module.exports.clock_time_get(-1, 0, 8), 28);
	assertEquals(module.exports.clock_time_get(4, 0, 8), 28);
});

Deno.test("clock_time_get with the realtime clock identifier", function() {
	const module = new Module({
		memory: new WebAssembly.Memory({ initial: 1 }),
	});

	const view = new DataView(module.memory.buffer);

	assertEquals(module.exports.clock_time_get(0, 0, 8), 0);
	assertNotEquals(view.getBigUint64(8, true), 0);

	assertEquals(module.exports.clock_time_get(0, 1, 8), 0);
	assertNotEquals(view.getBigUint64(8, true), 0);
});

Deno.test("clock_time_get with the monotonic clock identifier", function() {
	const module = new Module({
		memory: new WebAssembly.Memory({ initial: 1 }),
	});

	const view = new DataView(module.memory.buffer);

	assertEquals(module.exports.clock_time_get(1, 0, 8), 0);
	assertNotEquals(view.getBigUint64(8, true), 0);

	assertEquals(module.exports.clock_time_get(1, 1, 8), 0);
	assertNotEquals(view.getBigUint64(8, true), 0);
});

Deno.test("clock_time_get with the process clock identifier", function() {
	const module = new Module({
		memory: new WebAssembly.Memory({ initial: 1 }),
	});

	const view = new DataView(module.memory.buffer);

	assertEquals(module.exports.clock_time_get(2, 0, 8), 0);
	assertNotEquals(view.getBigUint64(8, true), 0);

	assertEquals(module.exports.clock_time_get(2, 1, 8), 0);
	assertNotEquals(view.getBigUint64(8, true), 0);
});

Deno.test("clock_time_get with the thread clock identifier", function() {
	const module = new Module({
		memory: new WebAssembly.Memory({ initial: 1 }),
	});

	const view = new DataView(module.memory.buffer);

	assertEquals(module.exports.clock_time_get(3, 0, 8), 0);
	assertNotEquals(view.getBigUint64(8, true), 0);

	assertEquals(module.exports.clock_time_get(3, 1, 8), 0);
	assertNotEquals(view.getBigUint64(8, true), 0);
});

Deno.test("fd_close with an invalid file descriptor", function() {
	const module = new Module({
		fds: [],
		memory: new WebAssembly.Memory({ initial: 1 }),
	});

	assertEquals(module.exports.fd_close(0), 8);
});

Deno.test("fd_close with a valid file descriptor", function() {
	const module = new Module({
		fds: [
			{
				handle: {
					close: function() {
					},
				},
			},
		],
		memory: new WebAssembly.Memory({ initial: 1 }),
	});

	assertEquals(module.exports.fd_close(0), 0);
	assertEquals(module.exports.fd_close(0), 8);
});

Deno.test("fd_read with an invalid file descriptor", function() {
	const module = new Module({
		fds: [],
		memory: new WebAssembly.Memory({ initial: 1 }),
	});

	assertEquals(module.exports.fd_read(-1, 8, 1, 0), 8);
	assertEquals(module.exports.fd_read(0, 8, 1, 0), 8);
});

Deno.test("fd_read with a valid file descriptor", function() {
	const module = new Module({
		fds: [
			{
				handle: {
					readSync: function(buffer : Uint8Array) {
						return 0;
					},
				}
			}
		],

		memory: new WebAssembly.Memory({ initial: 1 }),
	});

	assertEquals(module.exports.fd_read(0, 8, 1, 0), 0);
});

Deno.test("fd_renumber with an invalid file descriptor pair", function() {
	const module = new Module({
		fds: [
			{
				close: function() {
				},
			},
		],
		memory: new WebAssembly.Memory({ initial: 1 }),
	});

	assertEquals(module.exports.fd_renumber(-1, 0), 8);
	assertEquals(module.exports.fd_renumber(0, -1), 8);
	assertEquals(module.exports.fd_renumber(0, 1), 8);
	assertEquals(module.exports.fd_renumber(1, 0), 8);
});

Deno.test("fd_renumber with a valid file descriptor pair", function() {
	const module = new Module({
		fds: [
			{
				handle: {
					close: function() {
					},
				},
			},
			{
				handle: {
					close: function(buffer : Uint8Array) {
					},
				}
			},
		],
		memory: new WebAssembly.Memory({ initial: 1 }),
	});

	assertEquals(module.exports.fd_renumber(0, 1), 0);
});

Deno.test("fd_write with an invalid file descriptor", function() {
	const module = new Module({
		fds: [],
		memory: new WebAssembly.Memory({ initial: 1 }),
	});

	assertEquals(module.exports.fd_write(-1, 8, 1, 0), 8);
	assertEquals(module.exports.fd_write(0, 8, 1, 0), 8);
});

Deno.test("fd_write with a valid file descriptor", function() {
	const module = new Module({
		fds: [
			{
				handle: {
					writeSync: function(buffer : Uint8Array) {
						return 0;
					},
				}
			}
		],
		memory: new WebAssembly.Memory({ initial: 1 }),
	});

	assertEquals(module.exports.fd_write(0, 8, 1, 0), 0);
});

Deno.test("proc_exit with exit code 1", async function() {
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

Deno.test("random_get with a buffer length of 0", function() {
	const module = new Module({
		memory: new WebAssembly.Memory({ initial: 1 }),
	});

	assertEquals(module.exports.random_get(0, 0), 0);
});

Deno.test("random_get with a buffer length of 1", function() {
	const module = new Module({
		memory: new WebAssembly.Memory({ initial: 1 }),
	});

	assertEquals(module.exports.random_get(0, 1), 0);
});

Deno.test("random_get with a buffer length of 2", function() {
	const module = new Module({
		memory: new WebAssembly.Memory({ initial: 1 }),
	});

	assertEquals(module.exports.random_get(0, 2), 0);
});

Deno.test("random_get with a buffer length of 4", function() {
	const module = new Module({
		memory: new WebAssembly.Memory({ initial: 1 }),
	});

	assertEquals(module.exports.random_get(0, 4), 0);
});

Deno.test("random_get with a buffer length of 8", function() {
	const module = new Module({
		memory: new WebAssembly.Memory({ initial: 1 }),
	});

	assertEquals(module.exports.random_get(0, 8), 0);
});

Deno.test("random_get with a buffer length of 16", function() {
	const module = new Module({
		memory: new WebAssembly.Memory({ initial: 1 }),
	});

	assertEquals(module.exports.random_get(0, 16), 0);
});

Deno.test("random_get with a buffer length of 32", function() {
	const module = new Module({
		memory: new WebAssembly.Memory({ initial: 1 }),
	});

	assertEquals(module.exports.random_get(0, 32), 0);
});

Deno.test("random_get with a buffer length of 64", function() {
	const module = new Module({
		memory: new WebAssembly.Memory({ initial: 1 }),
	});

	assertEquals(module.exports.random_get(0, 64), 0);
});


Deno.test("random_get with a buffer length of 256", function() {
	const module = new Module({
		memory: new WebAssembly.Memory({ initial: 1 }),
	});

	assertEquals(module.exports.random_get(0, 256), 0);
});

Deno.test("random_get with a buffer length of 512", function() {
	const module = new Module({
		memory: new WebAssembly.Memory({ initial: 1 }),
	});

	assertEquals(module.exports.random_get(0, 512), 0);
});

Deno.test("random_get with a buffer length of 1024", function() {
	const module = new Module({
		memory: new WebAssembly.Memory({ initial: 1 }),
	});

	assertEquals(module.exports.random_get(0, 1024), 0);
});
