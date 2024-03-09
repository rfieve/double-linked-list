import { findGt as findGtNode } from '../functions/find-gt'
import { findGte as findGteNode } from '../functions/find-gte'
import { findLt as findLtNode } from '../functions/find-lt'
import { findLte as findLteNode } from '../functions/find-lte'
import { findMany as findManyNodes } from '../functions/find-many'
import { findOne as findOneNode } from '../functions/find-one'
import { hasNext as hasNextNode } from '../functions/has-next'
import { hasNodes as hasNodesList } from '../functions/has-nodes'
import { hasPrev as hasPrevNode } from '../functions/has-prev'
import { insert as insertNode } from '../functions/insert'
import { pop as popNode } from '../functions/pop'
import { push as pushNode } from '../functions/push'
import { reduce as reduceNodes } from '../functions/reduce'
import { remove as removeNode } from '../functions/remove'
import { shift as shiftNode } from '../functions/shift'
import { sort as sortNodes } from '../functions/sort'
import {
    toArrayInOrder as toArrayListInOrder,
    toArrayInOrderReverse as toArrayListInOrderReverse,
    toArrayMapInOrder as toArrayListMapInOrder,
    toArrayMapInOrderReverse as toArrayListMapInOrderReverse,
} from '../functions/to-array'
import { toDLL } from '../functions/to-doubly-linked-list'
import { traverseFrom as traverseListFrom } from '../functions/traverse-from'
import {
    traverseInOrder as traverseListInOrder,
    traverseInOrderReverse as traverseListInOrderReverse,
} from '../functions/traverse-in-order'
import { unshift as unshiftNode } from '../functions/unshift'
import { CompareFunction, Direction, DLL, DLLNode, MapFunction, ReduceFunction } from '../types'

function defaultCompare() {
    return 1
}

export class DoublyLinkedList<T> {
    protected l!       : DLL<T>
    protected compare! : CompareFunction<T>

    constructor(elements = [] as T[], compare = defaultCompare as CompareFunction<T>) {
        this.l = toDLL(elements, compare)
        this.compare = compare
    }

    public get dll() {
        return this.l
    }

    public get length() {
        return this.l.length
    }

    public get head() {
        return this.l.head
    }

    public get tail() {
        return this.l.tail
    }

    public static fromArray<K>(elements: K[]) {
        const dll = new DoublyLinkedList<K>()
        dll.l = toDLL(elements)
        return dll
    }

    // Updates
    public push(elements: T | T[]) {
        this.l = pushNode(this.l, elements)
        return this
    }

    public unshift(elements: T | T[]) {
        this.l = unshiftNode(this.l, elements)
        return this
    }

    public insert(elements: T | T[], compare?: CompareFunction<T>, from?: DLLNode<T>) {
        this.l = insertNode(this.l, elements, compare || this.compare, from)
        return this
    }

    public pop(amount = 1) {
        this.l = popNode(this.l, amount)
        return this
    }

    public shift(amount = 1) {
        this.l = shiftNode(this.l, amount)
        return this
    }

    public remove(elements: T | T[], compare?: CompareFunction<T>) {
        this.l = removeNode(this.l, elements, compare || this.compare)
        return this
    }

    public sort(compare?: CompareFunction<T>) {
        this.compare = compare || this.compare
        this.l = sortNodes(this.l, this.compare)
        return this
    }

    // Traversals
    public traverseFrom(node: DLLNode<T>, direction: Direction, cb: (node: DLLNode<T>) => void) {
        traverseListFrom(node, direction, cb)
        return this
    }

    public traverseInOrder(cb: (node: DLLNode<T>) => void) {
        traverseListInOrder(this.l, cb)
        return this
    }

    public traverseInOrderReverse(cb: (node: DLLNode<T>) => void) {
        traverseListInOrderReverse(this.l, cb)
        return this
    }

    // Conversions
    public toArrayInOrder() {
        return toArrayListInOrder(this.l)
    }

    public toArrayInOrderReverse() {
        return toArrayListInOrderReverse(this.l)
    }

    public toArrayMapInOrder<U>(mapper: MapFunction<T, U>) {
        return toArrayListMapInOrder(this.l, mapper)
    }

    public toArrayMapInOrderReverse<U>(mapper: MapFunction<T, U>) {
        return toArrayListMapInOrderReverse(this.l, mapper)
    }

    public reduce<U>(reducer: ReduceFunction<T, U>, init: U) {
        return reduceNodes(this.l, reducer, init)
    }

    // Assessments
    public hasNodes() {
        return hasNodesList(this.l)
    }

    public hasPrev(element: T) {
        const node = findOneNode(this.l, this.compare, element)
        return node && hasPrevNode(node)
    }

    public hasNext(element: T) {
        const node = findOneNode(this.l, this.compare, element)
        return node && hasNextNode(node)
    }

    // Finders
    public findOne(element: T, compare?: CompareFunction<T>) {
        return findOneNode(this.l, compare || this.compare, element)
    }

    public findMany(element: T, compare?: CompareFunction<T>) {
        return findManyNodes(this.l, compare || this.compare, element)
    }

    public findGt(element: T) {
        return findGtNode(this.l, this.compare, element)
    }

    public findGte(element: T) {
        return findGteNode(this.l, this.compare, element)
    }

    public findLt(element: T) {
        return findLtNode(this.l, this.compare, element)
    }

    public findLte(element: T) {
        return findLteNode(this.l, this.compare, element)
    }
}
