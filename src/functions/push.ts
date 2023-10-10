import { attachNext } from './attach'
import { hasNodes } from './has-nodes'
import { toDLL } from './to-doubly-linked-list'
import { DLL, DLLWithNodes } from '../types'

function pushElement<T>(dll: DLLWithNodes<T>, element: T) {
    dll.length++
    dll.tail = attachNext(dll.tail, element)
}

function pushElements<T>(dll: DLLWithNodes<T>, elements: T[]) {
    for (const element of elements) {
        pushElement(dll, element)
    }
}

/**
 * Adds the given elements to the given doubly linked list's tail in place.
 * @param dll The source doubly linked list.
 * @param elements The nodes to be pushed.
 * @returns The doubly linked list.
 */
export function push<T>(dll: DLL<T>, elements: T | T[]): DLL<T> {
    const isArray = Array.isArray(elements)

    if (!hasNodes(dll)) {
        return Object.assign(dll, toDLL(isArray ? elements : [elements]))
    }

    if (isArray) {
        pushElements(dll, elements)
    } else {
        pushElement(dll, elements)
    }

    return dll
}
