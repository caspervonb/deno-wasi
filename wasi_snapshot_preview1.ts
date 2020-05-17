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

export function args_get(argv_ptr, argv_buf_ptr)
{
	return ERRNO_NOSYS;
}

export function args_sizes_get(argc_out, argv_buf_size_out)
{
	return ERRNO_NOSYS;
}

export function environ_get(environ_ptr, environ_buf_ptr)
{
	return ERRNO_NOSYS;
}

export function environ_sizes_get(environc_out, environ_buf_size_out)
{
	return ERRNO_NOSYS;
}

export function clock_res_get(id, resolution_out)
{
	return ERRNO_NOSYS;
}

export function clock_time_get(id, precision, time_out)
{
	return ERRNO_NOSYS;
}

export function fd_advise(fd, offset, len, advice)
{
	return ERRNO_NOSYS;
}

export function fd_allocate(fd, offset, len)
{
	return ERRNO_NOSYS;
}

export function fd_close(fd)
{
	return ERRNO_NOSYS;
}

export function fd_datasync(fd)
{
	return ERRNO_NOSYS;
}

export function fd_fdstat_get(fd, stat_out)
{
	return ERRNO_NOSYS;
}

export function fd_fdstat_set_flags(fd, flags)
{
	return ERRNO_NOSYS;
}

export function fd_fdstat_set_rights(fd, fs_rights_base, fs_rights_inheriting)
{
	return ERRNO_NOSYS;
}

export function fd_filestat_get(fd, buf_out)
{
	return ERRNO_NOSYS;
}

export function fd_filestat_set_size(fd, size)
{
	return ERRNO_NOSYS;
}

export function fd_filestat_set_times(fd, atim, mtim, fst_flags)
{
	return ERRNO_NOSYS;
}

export function fd_pread(fd, iovs_ptr, iovs_len, offset, nread_out)
{
	return ERRNO_NOSYS;
}

export function fd_prestat_get(fd, buf_out)
{
	return ERRNO_NOSYS;
}

export function fd_prestat_dir_name(fd, path_ptr, path_len)
{
	return ERRNO_NOSYS;
}

export function fd_pwrite(fd, iovs_ptr, iovs_len, offset, nwritten_out)
{
	return ERRNO_NOSYS;
}

export function fd_read(fd, iovs_ptr, iovs_len, nread_out)
{
	return ERRNO_NOSYS;
}

export function fd_readdir(fd, buf_ptr, buf_len, cookie, bufused_out)
{
	return ERRNO_NOSYS;
}

export function fd_renumber(fd, to)
{
	return ERRNO_NOSYS;
}

export function fd_seek(fd, offset, whence, newoffset_out)
{
	return ERRNO_NOSYS;
}

export function fd_sync(fd)
{
	return ERRNO_NOSYS;
}

export function fd_tell(fd, offset_out)
{
	return ERRNO_NOSYS;
}

export function fd_write(fd, iovs_ptr, iovs_len, nwritten_out)
{
	return ERRNO_NOSYS;
}

export function path_create_directory(fd, path_ptr, path_len)
{
	return ERRNO_NOSYS;
}

export function path_filestat_get(fd, flags, path_ptr, path_len, buf_out)
{
	return ERRNO_NOSYS;
}

export function path_filestat_set_times(fd, flags, path_ptr, path_len, atim, mtim, fst_flags)
{
	return ERRNO_NOSYS;
}

export function path_link(old_fd, old_flags, old_path_ptr, old_path_len, new_fd, new_path_ptr, new_path_len)
{
	return ERRNO_NOSYS;
}

export function path_open(fd, dirflags, path_ptr, path_len, oflags, fs_rights_base, fs_rights_inherting, fdflags, opened_fd_out)
{
	return ERRNO_NOSYS;
}

export function path_readlink(fd, path_ptr, path_len, buf_ptr, buf_len, bufused_out)
{
	return ERRNO_NOSYS;
}

export function path_remove_directory(fd, path_ptr, path_len)
{
	return ERRNO_NOSYS;
}

export function path_rename(fd, old_path_ptr, old_path_len, new_fd, new_path_ptr, new_path_len)
{
	return ERRNO_NOSYS;
}

export function path_symlink(old_path_ptr, old_path_len, fd, new_path_ptr, new_path_len)
{
	return ERRNO_NOSYS;
}

export function path_unlink_file(fd, path_ptr, path_len)
{
	return ERRNO_NOSYS;
}

export function poll_oneoff(in_ptr, out_ptr, nsubscriptions, nevents_out)
{
	return ERRNO_NOSYS;
}

export function proc_exit(rval)
{
	return ERRNO_NOSYS;
}

export function proc_raise(sig)
{
	return ERRNO_NOSYS;
}

export function sched_yield()
{
	return ERRNO_NOSYS;
}

export function random_get(buf_ptr, buf_len)
{
	return ERRNO_NOSYS;
}

export function sock_recv(fd, ri_data_ptr, ri_data_len, ri_flags, ro_datalen_out, ro_flags_out)
{
	return ERRNO_NOSYS;
}

export function sock_send(fd, si_data_ptr, si_data_len, si_flags, so_datalen_out)
{
	return ERRNO_NOSYS;
}

export function sock_shutdown(fd, how)
{
	return ERRNO_NOSYS;
}

