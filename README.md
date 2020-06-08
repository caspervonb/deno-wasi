# wasi

WebAssembly System Interface implementation for Deno

## Example

```typescript
import WASI from "https://deno.land/x/wasi/mod.ts";

const wasi = new WASI({
	args: Deno.argv,
	env: Deno.env,
});

const binary = Deno.readAll("command.wasm");
const module = await WebAssembly.compile(binary);
const instance = await WebAssembly.instantiate(module, {
	wasi_snapshot_preview1: wasi.exports,
});

wasi.memory = module.exports.memory;
instance.exports._start();
```
