# normik

<p align="center" style="font-weight: bold; font-size: 20px;">
Fast and simple library for convert your data from server to store and backward.
</p>

## Installation

```
npm install normik --save
```

If you find bag, please create ISSUE.

## Scheme structure

```js
[
    [field_name_server, field_name_client?, default_value?]
]
```

**If not field_name_client will be set default field_name_server.**
<br>

**If you need set default value, but don't need set field_name_client, plese set**

**If you need usage nesting, please use dot in field name**

```js
money.now

{
    ...other data
    money: {
        now: $value$
    }
}
```

```js
field_name_client = "";
```

## Example usage

Example scheme convert

```js
[
  ["user_name", "userName"],
  ["age"],
  ["money.now", "moneyNow", 0],
  ["email", "", null],
  ["phones", "phone.bob"]
];
```

Example data from server

```json
{
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