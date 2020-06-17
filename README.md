# Prime WASM and Emscripten tool

Prime-wasm is the result of a working demo project for demonstrating the use of `WebAssembly`, this tool is presented as a kind of workaround for compiled code in the Browser in a C-JS code transformation for handling binary code on web client-server apps.

This project uses `ExpressJS` as an HTTP server and `Emscripten` as a WA module. `Emscripten` is an `LLVM` to `Javascript` compiler that can also generate `WebAssembly` modules, basically makes the `WASM` work way easier than using Browser APIs directly. The goal is to compile our own `WebAssembly` modules and have complete control of that process


## A Little bit of Emscripten

`Emscripten` provide us a single toolset with LLVM bundled for Full support of C and C++, in simple words, is a glue code for loading and instantiating WASM modules

Internally contains additional tools like a JS library called `preamble.js` (JS to C utilities), widely used for reading string content from memory. The `<emscripten.h>` (interaction from C to JS) - library and the `<html5.h>` which binds C code to Web events (clicks, hovers, etc).

## Installation

The installation process is quite easy, check the official docs for it.

Make sure to set up your PATH environment variables right.

## Usage

For the `NodeJS` part, just need to `npm install`, and after, perform the `npm start command`

For the `WASM/Emscripten` part (I assume that it's already installed), you will need to compile, in case of making changes with this command

` emcc lib/prime.c -s WASM=1 -s EXPORTED_FUNCTIONS="['_main','_isPrime','_checkPrimes']" -o public/prime.js`


## The program

The program compares the execution time between a full native JS function and an imported C code function with WASM. Both functions evaluate prime numbers in a for loop, check your browser's console in order to get the results.

## Credits

 - [David E Lares](https://twitter.com/davidlares3)

## License

 - [MIT](https://opensource.org/licenses/MIT)
