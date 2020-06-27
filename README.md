# WebAssembly System Interface implementation for Deno

**Note: This module has been merged into Deno, further development will take place in the [Deno repository](https://github.com/denoland/deno)**

This package provides an implementation of the [WebAssembly System
Interface](https://github.com/webassembly/wasi) for the
[Deno](https://github.com/denoland/deno) TypeScript runtime.

# Status

This is a work in progress so if a function isn't implemented, hit refresh.

| Name                      | Status  | Notes                                                                                  |
|---------------------------|:-------:|----------------------------------------------------------------------------------------|
| `args_get`                | &check; |                                                                                        |
| `args_sizes_get`          | &check; |                                                                                        |
| `environ_get`             | &check; |                                                                                        |
| `environ_sizes_get`       | &check; |                                                                                        |
| `clock_res_get`           | &check; |                                                                                        |
| `clock_time_get`          | &check; |                                                                                        |
| `fd_advise`               |         | This has no obvious path to implementation at this time.                               |
| `fd_allocate`             |         | This has no obvious path to implementation at this time.                               |
| `fd_close`                | &check; |                                                                                        |
| `fd_datasync`             |         | This is blocking on getting fdatasync(2) implemented upstream in Deno.                 |
| `fd_fdstat_get`           | &check; | This currently does not write flags and rights as we do not track those at the moment. |
| `fd_fdstat_set_flags`     |         | This has no obvious path to implementation at this time.                               |
| `fd_fdstat_set_rights`    |         |                                                                                        |
| `fd_filestat_get`         |         | This is blocking on getting fstat implemented upstream in Deno.                        |
| `fd_filestat_set_size`    |         | This is blocking on getting ftruncate implemented upstream in Deno.                    |
| `fd_filestat_set_times`   | &check; |                                                                                        |
| `fd_pread`                | &check; |                                                                                        |
| `fd_prestat_get`          | &check; |                                                                                        |
| `fd_prestat_dir_name`     | &check; |                                                                                        |
| `fd_pwrite`               | &check; |                                                                                        |
| `fd_read`                 | &check; |                                                                                        |
| `fd_readdir`              |         |                                                                                        |
| `fd_renumber`             | &check; |                                                                                        |
| `fd_seek`                 | &check; |                                                                                        |
| `fd_sync`                 | &check; | This is blocking on getting fsync(2) implemented upstream in Deno.                     |
| `fd_tell`                 | &check; |                                                                                        |
| `fd_write`                | &check; |                                                                                        |
| `path_create_directory`   | &check; |                                                                                        |
| `path_filestat_get`       | &check; |                                                                                        |
| `path_filestat_set_times` | &check; |                                                                                        |
| `path_link`               | &check; |                                                                                        |7
| `path_open`               | &check; | Opening directories is not portable                                                    |
| `path_readlink`           | &check; |                                                                                        |
| `path_remove_directory`   | &check; |                                                                                        |
| `path_rename`             | &check; |                                                                                        |
| `path_symlink`            | &check; |                                                                                        |
| `path_unlink_file`        | &check; |                                                                                        |
| `poll_oneoff`             | &check; |                                                                                        |
| `proc_exit`               | &check; |                                                                                        |
| `proc_raise`              |         |                                                                                        |
| `sched_yield`             |         |                                                                                        |
| `random_get`              | &check; |                                                                                        |
| `sock_recv`               |         |                                                                                        |
| `sock_send`               |         |                                                                                        |
| `sock_shutdown`           |         |                                                                                        |

## Example

```typescript
	instance.exports._start();
} else if (module.exports._initialize) {
import WASI from "https://deno.land/x/wasi/mod.ts";

const wasi = new WASI({
	args: Deno.args,
	env: Deno.env,
});

const binary = Deno.readAll("command.wasm");
const module = await WebAssembly.compile(binary);
const instance = await WebAssembly.instantiate(module, {
	wasi_snapshot_preview1: wasi.exports,
});

wasi.memory = module.exports.memory;

if (module.exports._start) {
	instance.exports._initialize();
} else {
	throw new Error("No entry point found");
}
```
