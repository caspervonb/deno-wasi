#!/bin/sh

if [ "$OS" = "Windows_NT" ]; then
	wasi_uri="https://github.com/WebAssembly/wasi-sdk/releases/download/wasi-sdk-11/wasi-sdk-11.0-mingw.tar.gz"
elif [ "$(uname -s)" = "Darwin" ]; then
        wasi_uri="https://github.com/WebAssembly/wasi-sdk/releases/download/wasi-sdk-11/wasi-sdk-11.0-macos.tar.gz"
else
        wasi_uri="https://github.com/WebAssembly/wasi-sdk/releases/download/wasi-sdk-11/wasi-sdk-11.0-linux.tar.gz"
fi

if [ "$OS" = "Windows_NT" ]; then
	wasi_root="C:/wasi-sdk"
	wasi_bin="$wasi_root/bin"
else
	wasi_root="/opt/wasi-sdk"
	wasi_bin="$wasi_root/bin"
fi

curl -L -o wasi-sdk.tar.gz "$wasi_uri"
tar -xf wasi-sdk.tar.gz
mv wasi-sdk-11.0 "$wasi_root"

echo "::add-path::$wasi_bin"


