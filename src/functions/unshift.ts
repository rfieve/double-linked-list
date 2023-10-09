import { DLL, DLLWithNodes } from '../types'
import { attachPrev } from './attach'
import { hasNodes } from './has-nodes'
import { toDLL } from './to-doubly-linked-list'

function unshiftElement<T>(dll: DLLWithNodes<T>, element: T) {
    dll.length++
    dll.head = attachPrev(dll.head, element)
}

function unshiftElements<T>(dll: DLLWithNodes<T>, elements: T[]) {
    const reversed = elements.slice().reverse()

    for (const element of reversed) {
        unshiftElement(dll, element)
    }
}

/**
 * Adds the given elements to the given doubly linked list's head in place.
 * @param dll The source doubly linked list.
 * @param elements The nodes to be unshifted.
 * @returns The doubly linked list.
 */
export function unshift<T>(dll: DLL<T>, elements: T | T[]): DLL<T> {
    const isArray = Array.isArray(elements)

    if (!hasNodes(dll)) {
        return Object.assign(dll, toDLL(isArray ? elements : [elements]))
    }

    if (isArray) {
        unshiftElements(dll, elements)
    } else {
        unshiftElement(dll, elements)
    }

    return dll
}
