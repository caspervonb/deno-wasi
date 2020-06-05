// { "args": ["one", "two", "three" ] }

#include <assert.h>
#include <string.h>

int main(int argc, char* argv[]) {
	assert(argc == 3);
	assert(strcmp(argv[0], "one") == 0);
	assert(strcmp(argv[1], "two") == 0);
	assert(strcmp(argv[2], "three") == 0);
}
