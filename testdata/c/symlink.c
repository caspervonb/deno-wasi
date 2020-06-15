#include <assert.h>
#include <unistd.h>

int main(void) {
	const char* filepath = "./testdata/fixture/directory/file";
	const char* linkpath = "/fixture/directory/file_symlink";

	assert(symlink(filepath, linkpath) == 0);
	assert(unlink(linkpath) == 0);
}
