pmhpereira's [Project Euler](http://projecteuler.net/) solutions (in Javascript)
====================================

![](https://projecteuler.net/profile/pmh.pereira.png)

### Folder Hierarchy
The `/solutions` folder contains one folder for each solved problem, numbered with the id of the problem.
Each solution folder contains a `<#problem>.js` file with the solution to that problem.

A solution folder might contain more than one solution file for the given problem. In this case, the `<#problem>.js` file will **always** contain the fastest/latest one.

All solutions folders and files names are left-padded with zeros, allowing a correct alphanumeric sorting.

### Solution executable
The bundled `solution.bat` file allows to easily run a specific solution of a solved problem.

**Usage:** `solution [# problem]`

**Requirements:** `solution.bat` runs on _Windows_ and needs _Node.js_ to be installed on PATH.

**Note:** Although the folder and file names are left-padded with zeros, the `.bat` supports the input of unpadded numbers. Both `solution 0001` and `solution 1` will run the solution for the problem 001.
