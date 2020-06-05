// { "stdout": "Hello, world!" }

#include <stdio.h>

int main(void) {
	if (fputs("Hello, world!", stdout) == 0) {
		return ferror(stdout);
	}

	return 0;
}
