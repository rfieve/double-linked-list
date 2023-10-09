import { CompareFunction, DLL, DLLNode, DLLNodeWithNext, DLLNodeWithPrev } from '../types'
import { findOne } from './find-one'

function removeElement<T>(dll: DLL<T>, element: T, compare: CompareFunction<T>, from?: DLLNode<T>) {
    const target = findOne(dll, compare, element, from)

    if (target) {
        dll.length--

        const { next, prev } = target

        if (prev) {
            prev.next = next
        } else {
            dll.head = next as DLLNodeWithNext<T>
        }

        if (next) {
            next.prev = prev
        } else {
            dll.tail = prev as DLLNodeWithPrev<T>
        }

        return prev || next
    } else {
        return dll.head
    }
}

function removeElements<T>(dll: DLL<T>, elements: T[], compare: CompareFunction<T>) {
    const sorted = elements.slice().sort(compare)

    let prev

    for (const element of sorted) {
        prev = removeElement(dll, element, compare, prev)
    }
}

/**
 * Removes the given elements to the given doubly linked list in place.
 * @param dll The source doubly linked list.
 * @param elements The nodes to be removeed.
 * @param compare The compare function.
 * @returns The doubly linked list.
 */
export function remove<T>(dll: DLL<T>, elements: T | T[], compare: CompareFunction<T>): DLL<T> {
    if (Array.isArray(elements)) {
        removeElements(dll, elements, compare)
    } else {
        removeElement(dll, elements, compare)
    }

    return dll
}

/**
 * Creates an remove function for the given doubly linked list with the given compare function.
 * @param compare The compare function.
 * @returns The bound remove function.
 */
export function makeRemove<T>(compare: CompareFunction<T>) {
    return function (dll: DLL<T>, elements: T | T[]) {
        return remove(dll, elements, compare)
    }
}
