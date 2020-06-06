#include <errno.h>
#include <unistd.h>

int main(void) {
	if (rmdir("/tmp") != 0) {
		return errno;
	}

	return 0;
}
