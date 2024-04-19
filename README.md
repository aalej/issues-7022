# Repro for issue 7022

## Versions

firebase-tools: v13.7.3<br>
node: v20.9.0 <br>
platform: Windows 10

## Steps to reproduce issue

1. Run `npm i`
2. Run `firebase deploy --project PROJECT_ID`
   - Error is raised

```
[debug] [2024-04-19T12:40:56.909Z] Error: Source and destination must not be the same.
    at C:\Users\<path>\firebase-tools\node_modules\fs-extra\lib\util\stat.js:49:19
    at process.processTicksAndRejections (node:internal/process/task_queues:82:21)
[error]
[error] Error: An unexpected error has occurred.
```
