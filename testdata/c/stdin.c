// { "stdin": "Hello, world!" }

#include <assert.h>
#include <stdio.h>
#include <string.h>

int main(void) {
	char data[32];
	assert(fgets(data, sizeof(data), stdin) != NULL);
	assert(strcmp(data, "Hello, world!") == 0);

	return 0;
}
