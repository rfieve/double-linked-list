# ✌️🔗📝 doubly-linked-list

A zero-dependency TypeScript library to work with doubly linked lists and arrays of any types.

## Table of Content

-   [✌️🔗📝 doubly-linked-list](#️-doubly-linked-list)
    -   [Table of Content](#table-of-content)
    -   [Installation](#installation)
    -   [Usage](#usage)
    -   [Documentation](#documentation)
        -   [`toDLL`](#todll)
        -   [`unshift`, `insert`, `push`](#unshift-insert-push)
        -   [`shift`, `remove`, `pop`](#shift-remove-pop)
        -   [`sort`](#sort)
        -   [`map`](#map)
        -   [`reduce`](#reduce)
        -   [`findOne`, `findMany`](#findone-findmany)
        -   [`find(Gt/Gte/Lt/Lte)`](#findgtgteltlte)
        -   [`traverse`](#traverse)
        -   [`toArray`](#toarray)
        -   [`hasNodes`, `hasPrev`, `hasNext`](#hasnodes-hasprev-hasnext)
        -   [`makeCompareUtils`](#makecompareutils)
        -   [The infamous `DoublyLinkedList` class](#the-infamous-doublylinkedlist-class)

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

const insertAlpha = makeInsert(compareAlpha);
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

const list = toDLL(heroes, compareAlpha);

// Schema of "list"
// Anakin <-> Chewie <-> Han <-> Lando <-> Leia <-> Luke <-> Padme

const updatedList = pipe(
    (t) => insertAlpha(t, { name: 'Obiwan' }),
    (t) => insertAlpha(t, [{ name: 'Boba' }, { name: 'Grogu' }]),
    (t) => push(t, { name: 'Vador' }),
    (t) => removeAlpha(t, [{ name: 'Han' }, { name: 'Padme' }]),
    (t) => removeAlpha(t, { name: 'Luke' })
)(list);

// Schema of "updatedList"
// Anakin <-> Boba <-> Chewie <-> Grogu <-> Lando <-> Leia <-> Obiwan <-> Vador

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

### `unshift`, `insert`, `push`

Inserts a (or list of) given node(s) to the given doubly linked list (in place) and returns the list.

-   with the given compare function (`insert`)
-   at the head (`unshift`)
-   at the tail (`push`)

> :warning: Using another compare function than the one used to create the list with `toDLL` or using `push`/`unshift` will of course f\*\*k up the sorting. A safer approach consists of using `makeInsert`. It curries an `insert` closure function with the given compare function.

```typescript
// Schema of "list"
// 2 <-> 5 <-> 10 <-> 13 <-> 32 <-> 50 <-> 89

const a = insert(list, 11, compare);
// 2 <-> 5 <-> 10 <-> 11 <-> 13 <-> 32 <-> 50 <-> 89
const b = insert(list, [1, 100], compare);
// 1 <-> 2 <-> 5 <-> 10 <-> 13 <-> 32 <-> 50 <-> 89 <-> 100
const c = push(list, [3, 17]);
// 1 <-> 2 <-> 5 <-> 10 <-> 13 <-> 32 <-> 50 <-> 89 <-> 100 <-> 3 <-> 17
const d = unshift(list, 7);
// 7 <-> 1 <-> 2 <-> 5 <-> 10 <-> 13 <-> 32 <-> 50 <-> 89 <-> 100 <-> 3 <-> 17
```

---

### `shift`, `remove`, `pop`

Removes a (or list of) given node(s) from the given doubly linked list (in place) with the given compare function and returns the list.

-   with the given compare function (`remove`)
-   at the head (`shift`)
-   at the tail (`pop`)

```typescript
// Schema of "list"
// 2 <-> 5 <-> 10 <-> 13 <-> 32 <-> 50 <-> 89

const a = remove(list, 13, compare);
// 2 <-> 5 <-> 10 <-> 32 <-> 50 <-> 89
const b = remove(list, [2, 89], compare);
// 5 <-> 10 <-> 32 <-> 50
const c = shift(list);
// 10 <-> 32 <-> 50
const d = pop(list);
// 10 <-> 32
```

---

### `sort`

Sorts a doubly linked list with the given compare function and returns the new list.

```typescript
// Schema of "list"
// 2 <-> 5 <-> 10 <-> 13 <-> 32 <-> 50 <-> 89

const reversed = sort(list, (a: number, b: number) => b - a);
// 89 <-> 50 <-> 32 <-> 13 <-> 10 <-> 5 <-> 2
const ordered = sort(reversed, (a: number, b: number) => a - b);
// 2 <-> 5 <-> 10 <-> 13 <-> 32 <-> 50 <-> 89
```

---

### `map`

Maps the given doubly linked list nodes' data to anything.

```typescript
// Schema of "list"
// 2 <-> 5 <-> 10 <-> 13 <-> 32 <-> 50 <-> 89

const mapper = (node: DLLNode, index: number) => `${node.data}[${index}]`;
const a = map(list, mapper);
// '2[0]' <-> '5[1]' <-> '10[2]' <-> '13[3]' <-> '32[4]' <-> '50[5]' <-> '89[6]'
```

---

### `reduce`

Reduces the given doubly linked list to anything.

```typescript
// Schema of "list"
// 2 <-> 5 <-> 10 <-> 13 <-> 32 <-> 50 <-> 89

const reducer = (acc: number, node: DLLNode, index: number) => acc + node.data + index;
const a = reduce(list, reducer, 0); // 222
```

---

### `findOne`, `findMany`

Finds the first (`findOne`) or all (`findMany`) the matching node(s) into the given doubly linked list with the given compare function.

```typescript
// This compare function will capture the elements that, when compared with the searched one,
// will be in range of x - 5 to x + 5.
const compare = (a: number, b: number) => {
    if (a > b + 5) {
        return 1;
    }
    if (a < b - 5) {
        return -1;
    }
    return 0;
};

// Schema of "list"
// 2 <-> 5 <-> 10 <-> 13 <-> 32 <-> 50 <-> 89

const node = findOne(list, compare, 12)?.data; // 10
const nodes = findMany(list, compare, 12).map(({ data }) => data); // [ 10, 13 ]
```

---

### `find(Gt/Gte/Lt/Lte)`

Finds all gt/gte/lt/lte nodes into the given doubly linked list with the given compare function.

-   `findGt`
-   `findGte`
-   `findLt`
-   `findLte`

```typescript
// Schema of "list"
// 2 <-> 5 <-> 10 <-> 13 <-> 32 <-> 50 <-> 89

const results = findGte(list, compare, 13).map(({ data }) => data);
// [13, 32, 50, 89]
```

---

### `traverse`

Traverses a doubly linked list, invoking the callback function on each visited node:

-   `traverseFrom`
-   `traverseInOrder`
-   `traverseInOrderReverse`

```typescript
// Schema of "list"
// 2 <-> 5 <-> 10 <-> 13 <-> 32 <-> 50 <-> 89

const collect = (collection: number[]) => (node: { data: number }) => {
    collection.push(node.data);
};

const elements = [];

traverseFrom(list.head, 'next', collect(elements));
// elements: [2, 5, 10, 13, 32, 50, 89]
traverseInOrder(list, collect(elements));
// elements: [2, 5, 10, 13, 32, 50, 89]
traverseInOrderReverse(list, collect(elements));
// elements: [89, 50, 32, 13, 10, 5, 2]
```

---

### `toArray`

Converts the given doubly linked list to an array sorted as traversed, with an optional mapper:

-   `toArrayInOrder`
-   `toArrayInOrderReverse`
-   `toArrayMapInOrder`
-   `toArrayMapInOrderReverse`

```typescript
// Schema of "list"
// 2 <-> 5 <-> 10 <-> 13 <-> 32 <-> 50 <-> 89

const a = toArrayInOrder(list);
// [2, 5, 10, 13, 32, 50, 89]
const b = toArrayInOrderReverse(list);
// [89, 50, 32, 13, 10, 5, 2]

const mapper = (node: DLLNode, index: number) => node.data * index;
const c = toArrayMapInOrder(list, mapper);
// [0, 5, 20, 39, 128, 250, 534]
```

---

### `hasNodes`, `hasPrev`, `hasNext`

Assesses if the list contains nodes `hasNodes`.
Assesses if the given node has a prev node (`hasPrev`) or a next node (`hasNext`).

```typescript
// Schema of "list"
// 2 <-> 5 <-> 10 <-> 13 <-> 32 <-> 50 <-> 89

const isNonEmpty = hasNodes(list); // true

const hasPrevA = hasPrev(list.tail); // true
const hasPrevB = hasPrev(list.head); // false

const hasNextA = hasNext(list.head); // true
const hasNextB = hasNext(list.tail); // false
```

---

### `makeCompareUtils`

As the compare function is centric, for both the creation and the traversals of the DLL, a good practice is to create all the necessary utils, along with it. This will be DRY and ensure reusability and consistency.

```typescript
// compare-alpha.ts
export const compareAlpha = (a: Hero, b: Hero) => a.name.localeCompare(b.name);
export const {
    toDLL: toDLLAlpha,
    insert: insertAlpha,
    remove: removeAlpha,
    sort: sortAlpha,
    findOne: findOneAlpha,
    findMany: findManyAlpha,
    findGt: findGtAlpha,
    findGte: findGteAlpha,
    findLt: findLtAlpha,
    findLte: findLteAlpha,
} = makeCompareUtils(compareAlpha);

// other-file.ts
import {
    toDLLAlpha,
    insertAlpha,
    removeAlpha,
    sortAlpha,
    findOneAlpha,
    findManyAlpha,
    findGtAlpha,
    findGteAlpha,
    findLtAlpha,
    findLteAlpha,
} from './compare-alpha';

const list = toDLLAlpha([{ name: 'Anakin' }]);

const updatedList = pipe(
    (t) => insertAlpha(t, { name: 'Yoda' }),
    (t) => removeAlpha(t, { name: 'Anakin' }),
    (t) => findGteAlpha({ name: 'Yoda' })
)(list); // [{ data: 'Yoda' }]
```

---

### The infamous `DoublyLinkedList` class

While diverging from the functional approach, the `DoublyLinkedList` class offers many advantages, depending on the situation:

Pros:

-   Natural chaining
-   List state encapsulation
-   Compare function encapsulation
-   Has all methods listed as functions before

Cons:

-   No tree shaking of unused methods, obviously

Let's rewrite the Star Wars example with this approach:

```typescript
type Hero = { name: string };

const compareAlpha = (a: Hero, b: Hero) => a.name.localeCompare(b.name);

const heroes: Hero[] = [
    { name: 'Han' },
    { name: 'Anakin' },
    { name: 'Leia' },
    { name: 'Luke' },
    { name: 'Padme' },
    { name: 'Lando' },
    { name: 'Chewie' },
];

const list = new DoublyLinkedList(heroes, compareAlpha);
// Schema of list.list
// Anakin <-> Chewie <-> Han <-> Lando <-> Leia <-> Luke <-> Padme

list.insert({ name: 'Yoda' })
    .insert({ name: 'Obiwan' })
    .insert([{ name: 'Boba' }, { name: 'Grogu' }])
    .push({ name: 'Vador' })
    .remove([{ name: 'Han' }, { name: 'Padme' }])
    .remove({ name: 'Luke' });

// Schema of list.list, after update
// Anakin <-> Boba <-> Chewie <-> Grogu <-> Lando <-> Leia <-> Obiwan <-> Yoda <-> Vador
```
