#include <errno.h>
#include <sys/stat.h>

int main(void) {
	if (mkdir("/tmp/foo", 0700) != 0) {
		return errno;
	}

	return 0;
}
