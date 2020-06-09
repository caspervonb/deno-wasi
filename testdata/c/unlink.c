#include <assert.h>
#include <unistd.h>

int main(void) {
	assert(unlink("/tmp") == 0);

	return 0;
}
