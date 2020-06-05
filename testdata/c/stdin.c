// { "stdin": "Hello, world!" }

#include <stdio.h>

int main(void) {
	char x[32];

	if (fgets(x, sizeof(x), stdin) == NULL) {
		return ferror(stdin);
	}

	return 0;
}
