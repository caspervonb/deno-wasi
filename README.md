# wasi

WebAssembly System Interface implementation for Deno

## Example

```typescript
import WASI from "./https://deno.land/x/wasi/mod.ts";

const wasi = new WASI({
	args: Deno.argv,
	env: Deno.env,
});

const { module, instance } = await WebAssembly.instantiateStreaming(fetch("command.wasm"), {
	wasi_snapshot_preview1: wasi.exports,
});

wasi.memory = module.exports.memory;
module.exports._start();
```
