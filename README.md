# Point Network Error Codes

This package provides a list of Point Network specific error codes to standardize and facilitate communication among the different Point processes.

Since one of the uses of these codes is as _process exit codes_, they must be between **0 and 255**.

The following codes are avoided:
* 0 -> used to indicate success.
* 1-2, 126-165 & 255 -> assigned a special meaning by the _posix standard_. 

With that said, the available ranges are:
* 3-125 _(both included)_
* 166-254 _(both included)_

## Add New Code

1. Add the new code to `index.ts`, making sure it is within the available ranges mentioned above.
1. Run `yarn test`.
1. Run `yarn build`
1. Run `yarn readme:update`.
1. Commit and push your changes.

## Error Codes

| code | name                 | text                                                   |
| ---- | -------------------- | ------------------------------------------------------ |
| 10   | DEAD_ENGINE | Unable to start Point Engine for unknown reasons. |
| 11   | INVALID_KEYFILE | Keyfile has missing or invalid data. |
| 12   | LOCKFILE_PRESENT | Unable to create lockfile, process must be already running. |
| 13   | DDBB_FAILED_MIGRATION | Failed to run database migrations. |

