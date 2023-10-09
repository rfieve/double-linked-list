import { makeFindManyFromTraversal } from '../helpers/make-find-many-from-traversal'
import { makeFindManyTraversal } from '../helpers/make-find-many-traversal'
import { CompareFunction, DLL } from '../types'

const traverseLte = makeFindManyTraversal((comparison: number) => comparison >= 0)

/**
 * Finds all nodes lesser or equal than given element into the given doubly linked list with the given compare function.
 * @param dll The source doubly linked list.
 * @param compare The compare function.
 * @param element The element to be found.
 * @returns The found result.
 */
export const findLte = makeFindManyFromTraversal(traverseLte)

/**
 * Creates a find lesser or equal function for the given doubly linked list with the given compare function.
 * @param compare The compare function.
 * @returns The bound find function.
 */
export function makeFindLte<T>(compare: CompareFunction<T>) {
    return function (dll: DLL<T>, element: T) {
        return findLte(dll, compare, element)
    }
}
