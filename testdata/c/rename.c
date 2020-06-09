#include <assert.h>
#include <stdio.h>

int main(void) {
	char oldname[] = "/tmp/oldfile";
	char newname[] = "/tmp/newfile";

	FILE *oldfile = fopen(oldname, "w");
	assert(oldfile != NULL);
	assert(fclose(oldfile) == 0);

	assert(rename(oldname, newname) == 0);

	FILE *newfile = fopen(newname, "r");
	assert(newfile != NULL);
	assert(fclose(newfile) == 0);

	return 0;
}
