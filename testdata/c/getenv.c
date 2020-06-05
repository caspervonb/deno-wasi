// { "env": { "1": "one", "2": "two", "3": "three" } }

#include <assert.h>
#include <stdlib.h>
#include <string.h>

int main(void) {
	assert(strcmp(getenv("1"), "one") == 0);
	assert(strcmp(getenv("2"), "two") == 0);
	assert(strcmp(getenv("3"), "three") == 0);
}
