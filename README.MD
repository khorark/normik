# normik

<p align="center" style="font-weight: bold; font-size: 20px;">
Fast and simple library for convert your data from server to store and backward.

[![Version][version-badge]][package]
[![Build Status][build-badge]][build]
[![Tweet][twitter-badge]][twitter]
</p>

## Installation

```
npm install normik --save
```

If you find bag, please create ISSUE.

## Scheme structure

```js
[
    [field_name_server, field_name_client?, default_value?],
    [field_name_server, field_name_client?, default_value?],
    /// other fields
]
```

***If not field_name_client will be set default field_name_server.***
<br>

***If you need set default value, but don't need set field_name_client, plese set***

```js
field_name_client = "";
```

***If you need usage nesting, please use dot in field name***

```js
money.now

{
    ...other data
    money: {
        now: $value$
    }
}
```

## Example usage

Example scheme convert

```js
const scheme = [
  ["user_name", "userName"],
  ["age"],
  ["money.now", "moneyNow", 0],
  ["email", "", null],
  ["phones", "phone.bob"]
];
```

Example data from server

```js
const data = {
  "user_name": "bob",
  "age": 7,
  "money": {
    "now": 10
  },
  "phones": [7914, 8914]
}
```

### Convert from server

```js
import { norm2Store } from "normik";

const res = norm2Store(data, scheme);
```

Result

```json
{
  "userName": "bob",
  "age": 7,
  "moneyNow": 10,
  "email": null,
  "phone": {
    "bob": [7914, 8914]
  }
}
```

### Convert result to server

```js
import { norm2Server } from "normik";

const res = norm2Server(data, scheme);
```

Result

```json
{
  "user_name": "bob",
  "age": 7,
  "money": {
    "now": 10
  },
  "email": null,
  "phones": [7914, 8914]
}
```

## Licence MIT.


[build-badge]: https://img.shields.io/circleci/project/github/DylanVann/react-native-fast-image/master.svg?style=flat-square
[build]: https://circleci.com/gh/DylanVann/react-native-fast-image/tree/master
[downloads-badge]: https://img.shields.io/npm/dm/react-native-fast-image.svg?style=flat-square
[package]: https://www.npmjs.com/package/normik
[version-badge]: https://img.shields.io/npm/v/react-native-fast-image.svg?style=flat-square
[twitter]: https://twitter.com/AKhoroshikh
[twitter-badge]: https://img.shields.io/twitter/url/https/github.com/DylanVann/react-native-fast-image.svg?style=social