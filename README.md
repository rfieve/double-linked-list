# ✌️🔗📝 doubly-linked-list

A zero-dependency TypeScript library to work with doubly linked lists and arrays of any types.

## Table of Content

-   [✌️🔗📝 doubly-linked-list](#️-doubly-linked-list)
    -   [Table of Content](#table-of-content)
    -   [Installation](#installation)
    -   [Usage](#usage)
    -   [Documentation](#documentation)
        -   [`toDLL`](#todll)
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

```typescript
type Hero = { name: string };

const compareAlpha = (a: Hero, b: Hero) => a.name.localeCompare(b.name);

const addAlpha = makeAdd(compareAlpha);
const removeAlpha = makeRemove(compareAlpha);
const findOneAlpha = makeFindOne(compareAlpha);

const heroes: Hero[] = [
    { name: 'Han' },
    { name: 'Anakin' },
    { name: 'Leia' },
    { name: 'Luke' },
    { name: 'Padme' },
    { name: 'Lando' },
    { name: 'Chewie' },
];

const list = toDll(heroes, compareAlpha);

// Schema of "list"
// Anakin <-> Chewie <-> Han <-> Lando <-> Leia <-> Luke <-> Padme

const updatedList = pipe(
    (t) => addAlpha(t, { name: 'Obiwan' }),
    (t) => addAlpha(t, [{ name: 'Boba' }, { name: 'Grogu' }]),
    (t) => removeAlpha(t, [{ name: 'Han' }, { name: 'Padme' }]),
    (t) => removeAlpha(t, { name: 'Luke' })
)(list);

// Schema of "updatedList"
// Anakin <-> Boba <-> Chewie <-> Grogu <-> Lando <-> Leia <-> Obiwan

const grogu = findOneAlpha(updatedList, { name: 'Grogu' }); // { data: 'Grogu', next: ..., prev: ...}
```

## Documentation

### `toDLL`

Converts the given array to a doubly linked list (`toDLL`), depending on a given compare function if provided.

```typescript
const arr = [10, 32, 13, 2, 89, 5, 50];
const compare = (a: number, b: number) => a - b;

const list = toDLL(arr, compare);
// Schema of "list"
// 2 <-> 5 <-> 10 <-> 13 <-> 32 <-> 50 <-> 89

const unorderedList = toDLL(arr);
// Schema of "unorderedList"
// 10 <-> 32 <-> 13 <-> 2 <-> 89 <-> 5 <-> 50
```

---

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
