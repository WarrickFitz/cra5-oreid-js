# CRA 5 + OreId-js

This is a test application showing the problems on runs into when pulling oreid-js into an CRA 5 applicaiton. 

react-app-rewired is used to rewire webpack. 

config-overrides.js contains the following: 

```
    loaders.fallback = {
        "buffer": require.resolve("buffer-browserify"),
        "assert": require.resolve("assert-browserify"),
        "stream": require.resolve("stream-browserify"),
        "crypto": require.resolve("crypto-browserify"),
        "util": require.resolve("util"),
    }
```

This prevents the server from crashing on start, but console.log still prints the following

```
ghash.js:1 Uncaught ReferenceError: Buffer is not defined
    at Object../node_modules/browserify-aes/ghash.js (ghash.js:1:1)
    at Object.options.factory (react refresh:6:1)
    at __webpack_require__ (bootstrap:24:1)
    at fn (hot module replacement:61:1)
    at Object../node_modules/browserify-aes/authCipher.js (authCipher.js:4:1)
    at Object.options.factory (react refresh:6:1)
    at __webpack_require__ (bootstrap:24:1)
    at fn (hot module replacement:61:1)
    at Object../node_modules/browserify-aes/encrypter.js (encrypter.js:7:1)
    at Object.options.factory (react refresh:6:1)
```

This link seems like it provides a clue: https://stackoverflow.com/questions/68707553/uncaught-referenceerror-buffer-is-not-defined