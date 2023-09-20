import { DLL } from '../types';
import { attachNext } from './attach';

function pushElement<T>(dll: DLL<T>, element: T) {
    dll.length++;
    dll.tail = attachNext(dll.tail, element);
}

function pushElements<T>(dll: DLL<T>, elements: T[]) {
    for (const element of elements) {
        pushElement(dll, element);
    }
}

/**
 * Adds the given elements to the given doubly linked list's tail in place.
 * @param dll The source doubly linked list.
 * @param elements The nodes to be pushed.
 * @returns The doubly linked list.
 */
export function push<T>(dll: DLL<T>, elements: T | T[]): DLL<T> {
    if (Array.isArray(elements)) {
        pushElements(dll, elements);
    } else {
        pushElement(dll, elements);
    }

    return dll;
}
