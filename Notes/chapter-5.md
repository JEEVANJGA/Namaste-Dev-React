# Chapter-5 | Let's get hooked

## Best coding practices

- create a proper file directory structure, even though there is no standard direction provided by React library
- place components seperately in individual files and not everything on a single file.

## Two Types of Export/Import

### Default Export/Import

```js
export default Component;

import Component from "file-path";
```

### Named Export/Import

```js
export const Component;

import { Component } from "file-path";
```

use Named Export/Import when multiple components are there to be exported.

