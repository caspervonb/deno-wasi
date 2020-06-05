#include <assert.h>
#include <time.h>

int main() {
	struct timespec ts;

	assert(clock_gettime(CLOCK_REALTIME, &ts) == 0);
	assert(clock_gettime(CLOCK_MONOTONIC, &ts) == 0);
	assert(clock_gettime(CLOCK_PROCESS_CPUTIME_ID, &ts) == 0);
	assert(clock_gettime(CLOCK_THREAD_CPUTIME_ID, &ts) == 0);
}
