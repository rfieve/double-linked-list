# ✌️🔗📝 doubly-linked-list

A zero-dependency TypeScript library to work with doubly linked lists and arrays of any types.

## Table of Content

-   [✌️🔗📝 doubly-linked-list](#️-doubly-linked-list)
    -   [Table of Content](#table-of-content)
    -   [Installation](#installation)
    -   [Usage](#usage)
    -   [Documentation](#documentation)
        -   [`hasPrev`, `hasNext`](#hasprev-hasnext)

## Installation

```sh
yarn add @romainfieve/doubly-linked-list
```

or

```sh
npm install @romainfieve/doubly-linked-list
```

## Usage

## Documentation

### `hasPrev`, `hasNext`

Assesses if the given node has a prev node (`hasPrev`) or a next node (`hasNext`).

```typescript
// Schema of "list"
// 2 <-> 5 <-> 10 <-> 13 <-> 32 <-> 50 <-> 89

const hasPrevA = hasPrev(list.tail); // true
const hasPrevB = hasPrev(list.head); // false

const hasNextA = hasNext(list.head); // true
const hasNextB = hasNext(list.tail); // false
```

---
