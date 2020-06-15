#include <assert.h>
#include <unistd.h>
#include <sys/stat.h>

int main(void) {
	struct stat st_old;
	struct stat st_new;

	assert(stat("/fixture/directory/file", &st_old) == 0);
	assert(link("/fixture/directory/file", "/fixture/directory/link") == 0);
	assert(stat("/fixture/directory/file", &st_new) == 0);
	assert(st_old.st_ino == st_new.st_ino);
	assert(unlink("/fixture/directory/link") == 0);

	return 0;
}
