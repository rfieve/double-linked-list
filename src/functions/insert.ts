import { CompareFunction, DLL, DLLNode } from '../types';
import { attachNext, attachPrev } from './attach';
import { findNextGte } from './find-next-gte';

function insertElement<T>(dll: DLL<T>, element: T, compare: CompareFunction<T>, from?: DLLNode<T>) {
    dll.length++;

    const target = findNextGte(from || dll.head, element, compare) ?? dll.tail;
    const comparison = compare(element, target.data);
    const attach = comparison <= 0 ? attachPrev : attachNext;

    return target === dll.tail && comparison > 0
        ? (dll.tail = attach(target, element))
        : target === dll.head
        ? (dll.head = attach(target, element))
        : attach(target, element);
}

function insertElements<T>(dll: DLL<T>, elements: T[], compare: CompareFunction<T>) {
    const sorted = elements.slice().sort(compare);

    let prev;

    for (const element of sorted) {
        prev = insertElement(dll, element, compare, prev);
    }
}

/**
 * Inserts the given elements to the given doubly linked list in place.
 * @param dll The source doubly linked list.
 * @param elements The nodes to be inserted.
 * @param compare The compare function.
 * @returns The doubly linked list.
 */
export function insert<T>(dll: DLL<T>, elements: T | T[], compare: CompareFunction<T>): DLL<T> {
    if (Array.isArray(elements)) {
        insertElements(dll, elements, compare);
    } else {
        insertElement(dll, elements, compare);
    }

    return dll;
}

/**
 * Creates an insert function for the given doubly linked list with the given compare function.
 * @param compare The compare function.
 * @returns The bound insert function.
 */
export function makeInsert<T>(compare: CompareFunction<T>) {
    return function (dll: DLL<T>, elements: T | T[]) {
        return insert(dll, elements, compare);
    };
}
