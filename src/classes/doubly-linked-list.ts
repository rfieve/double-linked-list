import { add as addNode } from '../functions/add';
import { findGt as findGtNode } from '../functions/find-gt';
import { findGte as findGteNode } from '../functions/find-gte';
import { findLt as findLtNode } from '../functions/find-lt';
import { findLte as findLteNode } from '../functions/find-lte';
import { findMany as findManyNodes } from '../functions/find-many';
import { findOne as findOneNode } from '../functions/find-one';
import { hasNext as hasNextNode } from '../functions/has-next';
import { hasPrev as hasPrevNode } from '../functions/has-prev';
import { remove as removeNode } from '../functions/remove';
import {
    toArrayInOrder as toArrayListInOrder,
    toArrayInOrderReverse as toArrayListInOrderReverse,
} from '../functions/to-array';
import { toDLL } from '../functions/to-doubly-linked-list';
import { traverseFrom as traverseListFrom } from '../functions/traverse-from';
import {
    traverseInOrder as traverseListInOrder,
    traverseInOrderReverse as traverseListInOrderReverse,
} from '../functions/traverse-in-order';
import { CompareFunction, Direction, DLL, DLLNode } from '../types';

export class DoublyLinkedList<T> {
    private l! : DLL<T>;

    private readonly compare! : CompareFunction<T>;

    constructor(elements: T[], compare = (() => 1) as CompareFunction<T>) {
        this.compare = compare;
        this.l = toDLL(elements, compare);
    }

    public get list() {
        return this.l;
    }

    // Updates
    public readonly add = (elements: T | T[], compare?: CompareFunction<T>) => {
        this.l = addNode(this.l, elements, compare || this.compare);
        return this;
    };

    public readonly remove = (elements: T | T[], compare?: CompareFunction<T>) => {
        this.l = removeNode(this.l, elements, compare || this.compare);
        return this;
    };

    // Traversals
    public readonly traverseFrom = (
        node: DLLNode<T>,
        direction: Direction,
        cb: (node: DLLNode<T>) => void
    ) => {
        traverseListFrom(node, direction, cb);

        return this;
    };

    public readonly traverseInOrder = (cb: (node: DLLNode<T>) => void) => {
        traverseListInOrder(this.l, cb);
        return this;
    };

    public readonly traverseInOrderReverse = (cb: (node: DLLNode<T>) => void) => {
        traverseListInOrderReverse(this.l, cb);
        return this;
    };

    // To array conversions
    public readonly toArrayInOrder = () => toArrayListInOrder(this.l);

    public readonly toArrayInOrderReverse = () => toArrayListInOrderReverse(this.l);

    // Assessments
    public readonly hasPrev = (element: T) => {
        const node = findOneNode(this.l, this.compare, element);
        return node && hasPrevNode(node);
    };

    public readonly hasNext = (element: T) => {
        const node = findOneNode(this.l, this.compare, element);
        return node && hasNextNode(node);
    };

    // Finders
    public readonly findOne = (element: T, compare?: CompareFunction<T>) =>
        findOneNode(this.l, compare || this.compare, element);

    public readonly findMany = (element: T, compare?: CompareFunction<T>) =>
        findManyNodes(this.l, compare || this.compare, element);

    public readonly findGt = (element: T) => findGtNode(this.l, this.compare, element);

    public readonly findGte = (element: T) => findGteNode(this.l, this.compare, element);

    public readonly findLt = (element: T) => findLtNode(this.l, this.compare, element);

    public readonly findLte = (element: T) => findLteNode(this.l, this.compare, element);
}
