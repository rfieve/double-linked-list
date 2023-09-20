import { DLL } from '../types';
import { attachPrev } from './attach';

function unshiftElement<T>(dll: DLL<T>, element: T) {
    dll.length++;
    dll.head = attachPrev(dll.head, element);
}

function unshiftElements<T>(dll: DLL<T>, elements: T[]) {
    const reversed = elements.slice().reverse();

    for (const element of reversed) {
        unshiftElement(dll, element);
    }
}

/**
 * Adds the given elements to the given doubly linked list's head in place.
 * @param dll The source doubly linked list.
 * @param elements The nodes to be unshifted.
 * @returns The doubly linked list.
 */
export function unshift<T>(dll: DLL<T>, elements: T | T[]): DLL<T> {
    if (Array.isArray(elements)) {
        unshiftElements(dll, elements);
    } else {
        unshiftElement(dll, elements);
    }

    return dll;
}
