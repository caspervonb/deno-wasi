#include <assert.h>
#include <stdio.h>
#include <string.h>

int main() {
	FILE* file = fopen("/tmp/output.txt", "w");
	assert(file != NULL);

	char data[] = "Hello, output.txt!";
	int nwritten = fwrite(data, sizeof(char), sizeof(data), file);
	assert(nwritten == sizeof(data));

	assert(ferror(file) == 0);
	assert(fclose(file) == 0);
}
