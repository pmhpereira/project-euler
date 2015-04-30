@echo off
setlocal EnableDelayedExpansion

echo.

WHERE /Q node

IF errorlevel == 1 (
	echo This .bat only runs on Windows machines with Node.js installed on PATH.
	echo node.exe not found on PATH. Aborting...
	echo.
) ELSE (
	IF "%1"=="" (
		set /p arg1="# problem: "
	) ELSE (
		set arg1=%1
	)

	set "problem=000!arg1!"
	set "problem=!problem:~-3!"

	IF EXIST "solutions\!problem!\!problem!.js" (
		node < solutions\!problem!\!problem!.js
		echo.
		PAUSE
	) ELSE (
		echo Solution for problem !arg1! is missing. Aborting...
	)

	echo.
)


