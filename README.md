# Ready

An async/await version of DOMContentLoaded.

## Installation

```sh
$ npm install @loganbussey/ready
```

## Usage

```js
import ready from '@loganbussey/ready';

(async () => {
  await ready();
  console.log('DOM ready!');
})();
```
