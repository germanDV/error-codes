export declare const pointErrorCodes: {
    readonly 10: {
        readonly code: 10;
        readonly name: "DEAD_ENGINE";
        readonly text: "Unable to start Point Engine for unknown reasons.";
    };
    readonly 11: {
        readonly code: 11;
        readonly name: "INVALID_KEYFILE";
        readonly text: "Keyfile has missing or invalid data.";
    };
    readonly 12: {
        readonly code: 12;
        readonly name: "LOCKFILE_PRESENT";
        readonly text: "Unable to create lockfile, process must be already running.";
    };
    readonly 13: {
        readonly code: 13;
        readonly name: "DDBB_FAILED_MIGRATION";
        readonly text: "Failed to run database migrations.";
    };
};
