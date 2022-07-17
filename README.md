# Point Network Error Codes

This package provides a list of Point Network specific error codes to standardize and facilitate communication among the different Point processes.

Since one of the uses of these codes is as _process exit codes_, they must be between **0 and 255**.

The following codes are avoided:
* 0 -> used to indicate success.
* 1-2, 126-165 & 255 -> assigned a special meaning by the _posix standard_. 

With that said, the available ranges are:
* 3-125 _(both included)_
* 166-254 _(both included)_

## Quick Start

Install:
```
npm i germanDV/error-codes#main
```

After installation, the dependency in `package.json` should look like:
```
"point-error-codes": "github:germanDV/error-codes#main"
```

Generate an error:
```typescript
import { PointErrCodes } from 'point-error-codes'

// Here we use it as a process exit code,
// but it could also be sent in an API response,
// or be used to instantiate custome Error classes and thrown.
process.exit(PointErrCodes.INVALID_KEYFILE)
```

Consume an error:
```typescript
import { pointErrorCodes } from 'point-error-codes'

try {
  // ...
} catch (err) {
  const pointErr = pointErrorCodes[err.code]
  // ...
}
```

## Update

This package is so simple that versioning and tagging seems a bit overkill.
At least for now, the way to update it is to remove and reinstall:
```
npm rm germanDV/error-codes#main
npm i germanDV/error-codes#main
```

## Add New Code

1. Choose an available code and add it to `src/index.ts` (tests will ensure it is within the available ranges).
1. Run `yarn test`.
1. Run `yarn build`.
1. Commit and push your changes.

## Docs

This package has been bootstrapped with [tsdx](https://tsdx.io/).

## Error Codes
| code | name | text |
| ---- | ---- | ---- |
| 11 | INVALID_KEYFILE | Keyfile has missing or invalid data. |
| 12 | LOCKFILE_PRESENT | Unable to create lockfile, process must be already running. |
| 13 | DDBB_FAILED_MIGRATION | Failed to run database migrations. |
| 14 | INVALID_CHECKSUM | Checksum for downloaded file does not match the expected one. |
