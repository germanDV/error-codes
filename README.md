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

Import and use it:
```
import { pointErrorCodes } from 'point-error-codes'

const n = process.env.N || 10
const err = pointErrorCodes[+n]

if (!err) {
  console.log(`Point error code ${n} does not exist`)
} else {
  console.log(`[${err.code}] ${err.name} -> ${err.text}`)
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
1. Run `yarn readme:update`.
1. Commit and push your changes.

## Docs

This package has been bootstrapped with [tsdx](https://tsdx.io/).

## Error Codes
| code | name | text |
| ---- | ---- | ---- |
| 11 | INVALID_KEYFILE | Keyfile has missing or invalid data. |
| 12 | LOCKFILE_PRESENT | Unable to create lockfile, process must be already running. |
| 13 | DDBB_FAILED_MIGRATION | Failed to run database migrations. |
