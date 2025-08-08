@echo off
@REM echo Cleaning up migrations and pgdata folders...

set SCRIPT_DIR=%~dp0
cd %SCRIPT_DIR%

if exist migrations\ (
    rmdir /s /q migrations
    echo Migrations folder deleted.
) else (
    echo Migrations folder not found.
)

if exist pgdata\ (
    rmdir /s /q pgdata
    echo PgData folder deleted.
) else (
    echo PgData folder not found.
)

@REM echo Cleanup complete.
@REM pause