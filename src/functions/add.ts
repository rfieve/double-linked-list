import { CompareFunction, DLL, DLLNode } from '../types';
import { attachNext, attachPrev } from './attach';
import { findNextGte } from './find-next-gte';

function addElement<T>(dll: DLL<T>, element: T, compare?: CompareFunction<T>, from?: DLLNode<T>) {
    dll.length++;

    const target =
        (compare ? findNextGte(from || dll.head, element, compare) : dll.tail) ?? dll.tail;

    return target === dll.tail
        ? (dll.tail = attachNext(target, element))
        : target === dll.head
        ? (dll.head = attachPrev(target, element))
        : attachPrev(target, element);
}

function addElements<T>(dll: DLL<T>, elements: T[], compare?: CompareFunction<T>) {
    const sorted = compare ? elements.slice().sort(compare) : elements;

    let prev;

    for (const element of sorted) {
        prev = addElement(dll, element, compare, prev);
    }
}

/**
 * Adds the given elements to the given doubly linked list.
 * and returns a new dll, without modifing the original dll in place.
 * @param dll The source doubly linked list.
 * @param elements The nodes to be added.
 * @param compare The compare function.
 * @returns The new doubly linked list.
 */
export function add<T>(dll: DLL<T>, elements: T | T[], compare?: CompareFunction<T>): DLL<T> {
    if (Array.isArray(elements)) {
        addElements(dll, elements, compare);
    } else {
        addElement(dll, elements, compare);
    }

    return dll;
}

/**
 * Creates an add function for the given doubly linked list with the given compare function.
 * @param compare The compare function.
 * @returns The bound add function.
 */
export function makeAdd<T>(compare: CompareFunction<T>) {
    return function (dll: DLL<T>, elements: T | T[]) {
        return add(dll, elements, compare);
    };
}
