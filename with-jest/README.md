[![Deploy to now](https://deploy.now.sh/static/button.svg)](https://deploy.now.sh/?repo=https://github.com/zeit/next.js/tree/master/examples/with-jest)
# Example app with jest tests

## How to use

Download the example [or clone the repo](https://github.com/zeit/next.js):

```bash
curl https://codeload.github.com/zeit/next.js/tar.gz/master | tar -xz --strip=2 next.js-master/examples/with-jest
cd with-jest
```

Install it and test:

```bash
npm install
npm test
```

## Fails with

```
> with-jest@ test /Users/remy/Sites/next-examples/with-jest
> jest

 FAIL  __tests__/index.test.js
  ● With Snapshot Testing › App shows "Hello world!"

    No router instance found.
    You should only use "next/router" inside the client side of your app.


      at throwIfNoRouter (node_modules/next/dist/lib/router/index.js:73:11)
      at Object.<anonymous> (__tests__/index.test.js:20:75)
      at process._tickCallback (internal/process/next_tick.js:109:7)

  With Enzyme
    ✓ App shows "Hello world!" (13ms)
  With Snapshot Testing
    ✕ App shows "Hello world!" (12ms)

Test Suites: 1 failed, 1 total
Tests:       1 failed, 1 passed, 2 total
Snapshots:   0 total
Time:        1.752s
Ran all test suites.
npm ERR! Test failed.  See above for more details.
```
