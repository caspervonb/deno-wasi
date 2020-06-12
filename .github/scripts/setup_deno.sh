if [ "$OS" = "Windows_NT" ]; then
	target="x86_64-pc-windows-msvc"
elif [ "$(uname -s)" = "Darwin" ]; then
	target="x86_64-apple-darwin"
else
	target="x86_64-unknown-linux-gnu"
fi

if [ $# -eq 0 ]; then
	deno_asset_path=$(
		curl -sSf https://github.com/denoland/deno/releases |
		grep -o "/denoland/deno/releases/download/.*/deno-${target}\\.zip" |
		head -n 1
	)

	if [ ! "path" ]; then
		echo "Error: Unable to find latest Deno release on GitHub." 1>&2
		exit 1
	fi
	deno_uri="https://github.com${deno_asset_path}"
else
	deno_uri="https://github.com/denoland/deno/releases/download/${1}/deno-${target}.zip"
fi

if [ "$OS" = "Windows_NT" ]; then
	deno_root="C:/deno"
	deno_bin="$deno_root/bin"
	deno_exe="$deno_bin/deno"
else
	deno_root="/opt/deno"
	deno_bin="$deno_root/bin"
	deno_exe="$deno_bin/deno"
fi

mkdir -p "$deno_bin"
cd "$deno_bin"

curl -L -o "$deno_exe.zip" "$deno_uri"

unzip -o "$deno_exe.zip"
rm "$deno_exe.zip"
chmod +x "$deno_exe"

echo "::add-path::$deno_bin"
