const  CLOCKID_REALTIME                          =  0;
const  CLOCKID_MONOTONIC                         =  1;
const  CLOCKID_PROCESS_CPUTIME_ID                =  2;
const  CLOCKID_THREAD_CPUTIME_ID                 =  3;

const  ERRNO_SUCCESS                             =  0;
const  ERRNO_2BIG                                =  1;
const  ERRNO_ACCES                               =  2;
const  ERRNO_ADDRINUSE                           =  3;
const  ERRNO_ADDRNOTAVAIL                        =  4;
const  ERRNO_AFNOSUPPORT                         =  5;
const  ERRNO_AGAIN                               =  6;
const  ERRNO_ALREADY                             =  7;
const  ERRNO_BADF                                =  8;
const  ERRNO_BADMSG                              =  9;
const  ERRNO_BUSY                                =  10;
const  ERRNO_CANCELED                            =  11;
const  ERRNO_CHILD                               =  12;
const  ERRNO_CONNABORTED                         =  13;
const  ERRNO_CONNREFUSED                         =  14;
const  ERRNO_CONNRESET                           =  15;
const  ERRNO_DEADLK                              =  16;
const  ERRNO_DESTADDRREQ                         =  17;
const  ERRNO_DOM                                 =  18;
const  ERRNO_DQUOT                               =  19;
const  ERRNO_EXIST                               =  20;
const  ERRNO_FAULT                               =  21;
const  ERRNO_FBIG                                =  22;
const  ERRNO_HOSTUNREACH                         =  23;
const  ERRNO_IDRM                                =  24;
const  ERRNO_ILSEQ                               =  25;
const  ERRNO_INPROGRESS                          =  26;
const  ERRNO_INTR                                =  27;
const  ERRNO_INVAL                               =  28;
const  ERRNO_IO                                  =  29;
const  ERRNO_ISCONN                              =  30;
const  ERRNO_ISDIR                               =  31;
const  ERRNO_LOOP                                =  32;
const  ERRNO_MFILE                               =  33;
const  ERRNO_MLINK                               =  34;
const  ERRNO_MSGSIZE                             =  35;
const  ERRNO_MULTIHOP                            =  36;
const  ERRNO_NAMETOOLONG                         =  37;
const  ERRNO_NETDOWN                             =  38;
const  ERRNO_NETRESET                            =  39;
const  ERRNO_NETUNREACH                          =  40;
const  ERRNO_NFILE                               =  41;
const  ERRNO_NOBUFS                              =  42;
const  ERRNO_NODEV                               =  43;
const  ERRNO_NOENT                               =  44;
const  ERRNO_NOEXEC                              =  45;
const  ERRNO_NOLCK                               =  46;
const  ERRNO_NOLINK                              =  47;
const  ERRNO_NOMEM                               =  48;
const  ERRNO_NOMSG                               =  49;
const  ERRNO_NOPROTOOPT                          =  50;
const  ERRNO_NOSPC                               =  51;
const  ERRNO_NOSYS                               =  52;
const  ERRNO_NOTCONN                             =  53;
const  ERRNO_NOTDIR                              =  54;
const  ERRNO_NOTEMPTY                            =  55;
const  ERRNO_NOTRECOVERABLE                      =  56;
const  ERRNO_NOTSOCK                             =  57;
const  ERRNO_NOTSUP                              =  58;
const  ERRNO_NOTTY                               =  59;
const  ERRNO_NXIO                                =  60;
const  ERRNO_OVERFLOW                            =  61;
const  ERRNO_OWNERDEAD                           =  62;
const  ERRNO_PERM                                =  63;
const  ERRNO_PIPE                                =  64;
const  ERRNO_PROTO                               =  65;
const  ERRNO_PROTONOSUPPORT                      =  66;
const  ERRNO_PROTOTYPE                           =  67;
const  ERRNO_RANGE                               =  68;
const  ERRNO_ROFS                                =  69;
const  ERRNO_SPIPE                               =  70;
const  ERRNO_SRCH                                =  71;
const  ERRNO_STALE                               =  72;
const  ERRNO_TIMEDOUT                            =  73;
const  ERRNO_TXTBSY                              =  74;
const  ERRNO_XDEV                                =  75;
const  ERRNO_NOTCAPABLE                          =  76;

const  RIGHTS_FD_DATASYNC                        =  0x0000000000000001n;
const  RIGHTS_FD_READ                            =  0x0000000000000002n;
const  RIGHTS_FD_SEEK                            =  0x0000000000000004n;
const  RIGHTS_FD_FDSTAT_SET_FLAGS                =  0x0000000000000008n;
const  RIGHTS_FD_SYNC                            =  0x0000000000000010n;
const  RIGHTS_FD_TELL                            =  0x0000000000000020n;
const  RIGHTS_FD_WRITE                           =  0x0000000000000040n;
const  RIGHTS_FD_ADVISE                          =  0x0000000000000080n;
const  RIGHTS_FD_ALLOCATE                        =  0x0000000000000100n;
const  RIGHTS_PATH_CREATE_DIRECTORY              =  0x0000000000000200n;
const  RIGHTS_PATH_CREATE_FILE                   =  0x0000000000000400n;
const  RIGHTS_PATH_LINK_SOURCE                   =  0x0000000000000800n;
const  RIGHTS_PATH_LINK_TARGET                   =  0x0000000000001000n;
const  RIGHTS_PATH_OPEN                          =  0x0000000000002000n;
const  RIGHTS_FD_READDIR                         =  0x0000000000004000n;
const  RIGHTS_PATH_READLINK                      =  0x0000000000008000n;
const  RIGHTS_PATH_RENAME_SOURCE                 =  0x0000000000010000n;
const  RIGHTS_PATH_RENAME_TARGET                 =  0x0000000000020000n;
const  RIGHTS_PATH_FILESTAT_GET                  =  0x0000000000040000n;
const  RIGHTS_PATH_FILESTAT_SET_SIZE             =  0x0000000000080000n;
const  RIGHTS_PATH_FILESTAT_SET_TIMES            =  0x0000000000100000n;
const  RIGHTS_FD_FILESTAT_GET                    =  0x0000000000200000n;
const  RIGHTS_FD_FILESTAT_SET_SIZE               =  0x0000000000400000n;
const  RIGHTS_FD_FILESTAT_SET_TIMES              =  0x0000000000800000n;
const  RIGHTS_PATH_SYMLINK                       =  0x0000000001000000n;
const  RIGHTS_PATH_REMOVE_DIRECTORY              =  0x0000000002000000n;
const  RIGHTS_PATH_UNLINK_FILE                   =  0x0000000004000000n;
const  RIGHTS_POLL_FD_READWRITE                  =  0x0000000008000000n;
const  RIGHTS_SOCK_SHUTDOWN                      =  0x0000000010000000n;

const  WHENCE_SET                                =  0;
const  WHENCE_CUR                                =  1;
const  WHENCE_END                                =  2;

const  FILETYPE_UNKNOWN                          =  0;
const  FILETYPE_BLOCK_DEVICE                     =  1;
const  FILETYPE_CHARACTER_DEVICE                 =  2;
const  FILETYPE_DIRECTORY                        =  3;
const  FILETYPE_REGULAR_FILE                     =  4;
const  FILETYPE_SOCKET_DGRAM                     =  5;
const  FILETYPE_SOCKET_STREAM                    =  6;
const  FILETYPE_SYMBOLIC_LINK                    =  7;

const  ADVICE_NORMAL                             =  0;
const  ADVICE_SEQUENTIAL                         =  1;
const  ADVICE_RANDOM                             =  2;
const  ADVICE_WILLNEED                           =  3;
const  ADVICE_DONTNEED                           =  4;
const  ADVICE_NOREUSE                            =  5;

const  FDFLAGS_APPEND                            =  0x0001;
const  FDFLAGS_DSYNC                             =  0x0002;
const  FDFLAGS_NONBLOCK                          =  0x0004;
const  FDFLAGS_RSYNC                             =  0x0008;
const  FDFLAGS_SYNC                              =  0x0010;

const  FSTFLAGS_ATIM                             =  0x0001;
const  FSTFLAGS_ATIM_NOW                         =  0x0002;
const  FSTFLAGS_MTIM                             =  0x0004;
const  FSTFLAGS_MTIM_NOW                         =  0x0008;

const  LOOKUPFLAGS_SYMLINK_FOLLOW                =  0x0001;

const  OFLAGS_CREAT                              =  0x0001;
const  OFLAGS_DIRECTORY                          =  0x0002;
const  OFLAGS_EXCL                               =  0x0004;
const  OFLAGS_TRUNC                              =  0x0008;

const  EVENTTYPE_CLOCK                           =  0;
const  EVENTTYPE_FD_READ                         =  1;
const  EVENTTYPE_FD_WRITE                        =  2;

const  EVENTRWFLAGS_FD_READWRITE_HANGUP          =  1;
const  SUBCLOCKFLAGS_SUBSCRIPTION_CLOCK_ABSTIME  =  1;

const  SIGNAL_NONE                               =  0;
const  SIGNAL_HUP                                =  1;
const  SIGNAL_INT                                =  2;
const  SIGNAL_QUIT                               =  3;
const  SIGNAL_ILL                                =  4;
const  SIGNAL_TRAP                               =  5;
const  SIGNAL_ABRT                               =  6;
const  SIGNAL_BUS                                =  7;
const  SIGNAL_FPE                                =  8;
const  SIGNAL_KILL                               =  9;
const  SIGNAL_USR1                               =  10;
const  SIGNAL_SEGV                               =  11;
const  SIGNAL_USR2                               =  12;
const  SIGNAL_PIPE                               =  13;
const  SIGNAL_ALRM                               =  14;
const  SIGNAL_TERM                               =  15;
const  SIGNAL_CHLD                               =  16;
const  SIGNAL_CONT                               =  17;
const  SIGNAL_STOP                               =  18;
const  SIGNAL_TSTP                               =  19;
const  SIGNAL_TTIN                               =  20;
const  SIGNAL_TTOU                               =  21;
const  SIGNAL_URG                                =  22;
const  SIGNAL_XCPU                               =  23;
const  SIGNAL_XFSZ                               =  24;
const  SIGNAL_VTALRM                             =  25;
const  SIGNAL_PROF                               =  26;
const  SIGNAL_WINCH                              =  27;
const  SIGNAL_POLL                               =  28;
const  SIGNAL_PWR                                =  29;
const  SIGNAL_SYS                                =  30;

const  RIFLAGS_RECV_PEEK                         =  0x0001;
const  RIFLAGS_RECV_WAITALL                      =  0x0002;

const  ROFLAGS_RECV_DATA_TRUNCATED               =  0x0001;

const  SDFLAGS_RD                                =  0x0001;
const  SDFLAGS_WR                                =  0x0002;

const  PREOPENTYPE_DIR                           =  0;

const clock_res_realtime = function() : bigint {
	return BigInt(1e6);
};

const clock_res_monotonic = function() : bigint {
	return BigInt(1e3);
};

const clock_res_process = clock_res_monotonic;
const clock_res_thread = clock_res_monotonic;

const clock_time_realtime = function() : bigint {
	return BigInt(Date.now()) * BigInt(1e6);
};

const clock_time_monotonic = function() : bigint {
	const t = performance.now();
	const s = Math.trunc(t);
	const ms = Math.floor((t - s) * 1e3);

	return (BigInt(s) * BigInt(1e9)) + (BigInt(ms) * BigInt(1e6));
};

const clock_time_process = clock_time_monotonic;
const clock_time_thread = clock_time_monotonic;

export type ModuleOptions = {
	args? : string[];
	env? : { [key: string]: string | undefined };
	memory? : WebAssembly.Memory;
};

export class Module {
	args? : string[];
	env? : { [key: string]: string | undefined };

	memory : WebAssembly.Memory;

	exports = {
		args_get: (argv_ptr : number, argv_buf_ptr : number) : number => {
			const args = this.args ? this.args : [];
			const text = new TextEncoder();
			const heap = new Uint8Array(this.memory.buffer);
			const view = new DataView(this.memory.buffer);

			for (let arg of args) {
				view.setUint32(argv_ptr, argv_buf_ptr, true);
				argv_ptr += 4;

				const data = text.encode(`${arg}\0`);
				heap.set(data, argv_buf_ptr);
				argv_buf_ptr += data.length;
			}

			return ERRNO_SUCCESS;
		},

		args_sizes_get: (argc_out : number, argv_buf_size_out : number) : number => {
			const args = this.args ? this.args : [];
			const text = new TextEncoder();
			const view = new DataView(this.memory.buffer);

			view.setUint32(argc_out, args.length, true);
			view.setUint32(argv_buf_size_out, args.reduce(function(acc, arg) {
				return acc + text.encode(`${arg}\0`).length;
			}, 0), true);

			return ERRNO_SUCCESS;
		},

		environ_get: (environ_ptr : number, environ_buf_ptr : number) : number => {
			const entries = Object.entries(this.env ? this.env : []);
			const text = new TextEncoder();
			const heap = new Uint8Array(this.memory.buffer);
			const view = new DataView(this.memory.buffer);

			for (let [key, value] of entries) {
				view.setUint32(environ_ptr, environ_buf_ptr, true);
				environ_ptr += 4;

				const data = text.encode(`${key}=${value}\0`);
				heap.set(data, environ_buf_ptr);
				environ_buf_ptr += data.length;
			}

			return ERRNO_SUCCESS;
		},

		environ_sizes_get: (environc_out : number, environ_buf_size_out : number) : number => {
			const entries = Object.entries(this.env ? this.env : []);
			const text = new TextEncoder();
			const view = new DataView(this.memory.buffer);

			view.setUint32(environc_out, entries.length, true);
			view.setUint32(environ_buf_size_out, entries.reduce(function(acc, [key, value]) {
				return acc + text.encode(`${key}=${value}\0`).length;
			}, 0), true);

			return ERRNO_SUCCESS;
		},

		clock_res_get: (id: number, resolution_out : number) : number => {
			const view = new DataView(this.memory.buffer);

			switch (id) {
				case CLOCKID_REALTIME:
					view.setBigUint64(resolution_out, clock_res_realtime(), true);
				break;

				case CLOCKID_MONOTONIC:
					view.setBigUint64(resolution_out, clock_res_monotonic(), true);
				break;

				case CLOCKID_PROCESS_CPUTIME_ID:
					view.setBigUint64(resolution_out, clock_res_process(), true);
				break;

				case CLOCKID_THREAD_CPUTIME_ID:
					view.setBigUint64(resolution_out, clock_res_thread(), true);
				break;

				default:
					return ERRNO_INVAL;

			}

			return ERRNO_SUCCESS;
		},

		clock_time_get: (id: number, precision : number, time_out : number) : number => {
			const view = new DataView(this.memory.buffer);

			switch (id) {
				case CLOCKID_REALTIME:
					view.setBigUint64(time_out, clock_time_realtime(), true);
				break;

				case CLOCKID_MONOTONIC:
					view.setBigUint64(time_out, clock_time_monotonic(), true);
				break;

				case CLOCKID_PROCESS_CPUTIME_ID:
					view.setBigUint64(time_out, clock_time_process(), true);
				break;

				case CLOCKID_THREAD_CPUTIME_ID:
					view.setBigUint64(time_out, clock_time_thread(), true);
				break;

				default:
					return ERRNO_INVAL;
			}

			return ERRNO_SUCCESS;
		},

		fd_advise: (fd : number, offset : number, len : number, advice : number) : number => {
			return ERRNO_NOSYS;
		},

		fd_allocate: (fd : number, offset : number, len : number) : number => {
			return ERRNO_NOSYS;
		},

		fd_close: (fd : number) : number => {
			return ERRNO_NOSYS;
		},

		fd_datasync: (fd : number) : number => {
			return ERRNO_NOSYS;
		},

		fd_fdstat_get: (fd : number, stat_out : number) : number => {
			return ERRNO_NOSYS;
		},

		fd_fdstat_set_flags: (fd : number, flags : number) : number => {
			return ERRNO_NOSYS;
		},

		fd_fdstat_set_rights: (fd : number, fs_rights_base : number | bigint, fs_rights_inheriting : number | bigint) : number => {
			return ERRNO_NOSYS;
		},

		fd_filestat_get: (fd : number, buf_out : number) : number => {
			return ERRNO_NOSYS;
		},

		fd_filestat_set_size: (fd : number, size : number) : number => {
			return ERRNO_NOSYS;
		},

		fd_filestat_set_times: (fd : number, atim : number, mtim : number, fst_flags : number) : number => {
			return ERRNO_NOSYS;
		},

		fd_pread: (fd : number, iovs_ptr : number, iovs_len : number, offset : number, nread_out : number) : number => {
			return ERRNO_NOSYS;
		},

		fd_prestat_get: (fd : number, buf_out : number) : number => {
			return ERRNO_NOSYS;
		},

		fd_prestat_dir_name: (fd : number, path_ptr : number, path_len : number) : number => {
			return ERRNO_NOSYS;
		},

		fd_pwrite: (fd : number, iovs_ptr : number, iovs_len : number, offset : number, nwritten_out : number) : number => {
			return ERRNO_NOSYS;
		},

		fd_read: (fd : number, iovs_ptr : number, iovs_len : number, nread_out : number) : number => {
			return ERRNO_NOSYS;
		},

		fd_readdir: (fd : number, buf_ptr : number, buf_len : number, cookie : number, bufused_out : number) : number => {
			return ERRNO_NOSYS;
		},

		fd_renumber: (fd : number, to : number) : number => {
			return ERRNO_NOSYS;
		},

		fd_seek: (fd : number, offset : number, whence : number, newoffset_out : number) : number => {
			return ERRNO_NOSYS;
		},

		fd_sync: (fd : number) : number => {
			return ERRNO_NOSYS;
		},

		fd_tell: (fd : number, offset_out : number) : number => {
			return ERRNO_NOSYS;
		},

		fd_write: (fd : number, iovs_ptr : number, iovs_len : number, nwritten_out : number) : number => {
			return ERRNO_NOSYS;
		},

		path_create_directory: (fd : number, path_ptr : number, path_len : number) : number => {
			return ERRNO_NOSYS;
		},

		path_filestat_get: (fd : number, flags : number, path_ptr : number, path_len : number, buf_out : number) : number => {
			return ERRNO_NOSYS;
		},

		path_filestat_set_times: (fd : number, flags : number, path_ptr : number, path_len : number, atim : number, mtim : number, fst_flags : number) : number => {
			return ERRNO_NOSYS;
		},

		path_link: (old_fd : number, old_flags : number, old_path_ptr : number, old_path_len : number, new_fd : number, new_path_ptr : number, new_path_len : number) : number => {
			return ERRNO_NOSYS;
		},

		path_open: (fd : number, dirflags : number, path_ptr : number, path_len : number, oflags : number, fs_rights_base : number | bigint, fs_rights_inherting : number | bigint, fdflags : number, opened_fd_out : number) : number => {
			return ERRNO_NOSYS;
		},

		path_readlink: (fd : number, path_ptr : number, path_len : number, buf_ptr : number, buf_len : number, bufused_out : number) : number => {
			return ERRNO_NOSYS;
		},

		path_remove_directory: (fd : number, path_ptr : number, path_len : number) : number => {
			return ERRNO_NOSYS;
		},

		path_rename: (fd : number, old_path_ptr : number, old_path_len : number, new_fd : number, new_path_ptr : number, new_path_len : number) : number => {
			return ERRNO_NOSYS;
		},

		path_symlink: (old_path_ptr : number, old_path_len : number, fd : number, new_path_ptr : number, new_path_len : number) : number => {
			return ERRNO_NOSYS;
		},

		path_unlink_file: (fd : number, path_ptr : number, path_len : number) : number => {
			return ERRNO_NOSYS;
		},

		poll_oneoff: (in_ptr : number, out_ptr : number, nsubscriptions : number, nevents_out : number) : number => {
			return ERRNO_NOSYS;
		},

		proc_exit: (rval : number) : never => {
			Deno.exit(rval);
		},

		proc_raise: (sig : number) : number => {
			return ERRNO_NOSYS;
		},

		sched_yield: () : number => {
			return ERRNO_NOSYS;
		},

		random_get: (buf_ptr : number, buf_len : number) : number => {
			const buffer = new Uint8Array(this.memory.buffer, buf_ptr, buf_len);
			crypto.getRandomValues(buffer);

			return ERRNO_SUCCESS;
		},

		sock_recv: (fd : number, ri_data_ptr : number, ri_data_len : number, ri_flags : number, ro_datalen_out : number, ro_flags_out : number) : number => {
			return ERRNO_NOSYS;
		},

		sock_send: (fd : number, si_data_ptr : number, si_data_len : number, si_flags : number, so_datalen_out : number) : number => {
			return ERRNO_NOSYS;
		},

		sock_shutdown: (fd : number, how : number) : number => {
			return ERRNO_NOSYS;
		},
	};

	constructor(options : ModuleOptions) {
		this.args = options.args;
		this.env = options.env;
		this.memory = options.memory as WebAssembly.Memory;
	}
};

export default Module;
