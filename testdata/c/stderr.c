// { "stderr": "Hello, world!" }

#include <stdio.h>

int main(void) {
	if (fputs("Hello, world!", stderr) == 0) {
		return ferror(stderr);
	}

	return 0;
}
