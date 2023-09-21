import { DLL } from '../types';

/**
 * Removes the node(s) of the given doubly linked list's tail in place.
 * @param dll The source doubly linked list.
 * @param amount The amount of nodes to remove.
 * @returns The doubly linked list.
 */
export function pop<T>(dll: DLL<T>, amount = 1): DLL<T> {
    let count = amount;

    while (count > 0 && dll.tail?.prev) {
        dll.length--;
        dll.tail = dll.tail.prev;
        count--;
    }

    return dll;
}
