import { CompareFunction, DLL } from '../types'
import { toArrayInOrder } from './to-array'
import { toDLL } from './to-doubly-linked-list'

/**
 * Sorts a double linked list and returns it without modifing the provided one.
 * @param dll The source doubly linked list.
 * @param compare The compare function.
 * @returns The sorted list.
 */
export function sort<T>(dll: DLL<T>, compare: CompareFunction<T>) {
    return toDLL(toArrayInOrder(dll), compare)
}

/**
 * Creates a sort function for the given doubly linked list with the given compare function.
 * @param compare The compare function.
 * @returns The bound sort function.
 */
export function makeSort<T>(compare: CompareFunction<T>) {
    return function (dll: DLL<T>) {
        return sort(dll, compare)
    }
}
