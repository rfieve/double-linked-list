import { DLL } from '../types'

/**
 * Removes the node(s) of the given doubly linked list's head in place.
 * @param dll The source doubly linked list.
 * @param amount The amount of nodes to remove.
 * @returns The doubly linked list.
 */
export function shift<T>(dll: DLL<T>, amount = 1): DLL<T> {
    let count = amount

    while (count > 0 && dll.head?.next) {
        dll.length--
        dll.head = dll.head.next
        count--
    }

    return dll
}
