import { makeFindManyFromTraversal } from '../helpers/make-find-many-from-traversal';
import { makeFindManyTraversal } from '../helpers/make-find-many-traversal';
import { CompareFunction, DLL } from '../types';

const traverseGte = makeFindManyTraversal((comparison: number) => comparison <= 0);

/**
 * Finds all nodes greater or equal than given element into the given double linked list with the given compare function.
 * @param dll The source double linked list.
 * @param compare The compare function.
 * @param element The element to be found.
 * @returns The found result.
 */
export const findGte = makeFindManyFromTraversal(traverseGte);

/**
 * Creates a find greater or equal function for the given double linked list with the given compare function.
 * @param compare The compare function.
 * @returns The bound find function.
 */
export function makeFindGte<T>(compare: CompareFunction<T>) {
    return function (dll: DLL<T>, element: T) {
        return findGte(dll, compare, element);
    };
}
