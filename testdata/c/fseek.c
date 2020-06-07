#include <assert.h>
#include <stdio.h>

int main(void) {
	FILE *file = fopen("/tmp/output.txt", "w");
	assert(file != NULL);

	char data[32] = { 0 };
	assert(fwrite(data, sizeof(char), sizeof(data), file) == 32);

	assert(fseek (file, 16, SEEK_SET) == 0);
	assert(ftell(file) == 16);

	assert(fseek (file, 16, SEEK_CUR) == 0);
	assert(ftell(file) == 32);

	assert(fseek (file, 0, SEEK_END) == 0);
	assert(ftell(file) == 32);

	assert(fclose(file) == 0);
}
