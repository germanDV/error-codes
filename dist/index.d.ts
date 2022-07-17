export declare enum PointErrCodes {
    INVALID_KEYFILE = 11,
    LOCKFILE_PRESENT = 12,
    DDBB_FAILED_MIGRATION = 13,
    INVALID_CHECKSUM = 14
}
export declare type PointErr = {
    code: number;
    name: string;
    text: string;
};
export declare const pointErrorCodes: {
    [k in PointErrCodes]: PointErr;
} & {
    [k: number]: PointErr;
};
