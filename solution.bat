@echo off
echo.

WHERE /Q node

IF errorlevel == 1 (
	echo This .bat only runs on Windows machines with Node.js installed on PATH.
	echo node.exe not found on PATH. Aborting...
	echo.
) ELSE (
	IF "%1"=="" (
		echo Usage: solution ^<# problem^>
	) ELSE (
		IF EXIST "solutions\%1\%1.js" (
			node < solutions\%1\%1.js
			echo.
			PAUSE
		) ELSE (
			echo Solution for problem %1 is missing. Aborting...
		)
	)

	echo.
)


