#include <assert.h>
#include <dirent.h>
#include <stdio.h>
#include <string.h>

int main(void) {
	DIR *dir = opendir("/fixture/directory");
	assert(dir != NULL);

	struct dirent *ent;
	while ((ent = readdir(dir)) != NULL) {
		assert(ent->d_type);
		assert(strlen(ent->d_name));
	}

	assert(closedir(dir) == 0);
}
