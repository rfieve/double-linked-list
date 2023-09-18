import { CompareFunction, DLL, DLLNode } from '../types';
import { hasNext } from './has-next';

/**
 * Finds a given element into the given double linked list with the given compare function.
 * @param dll The source double linked list.
 * @param compare The compare function.
 * @param element The element to be found.
 * @returns The found result.
 */
export function findOne<T>(
    dll: DLL<T>,
    compare: CompareFunction<T>,
    element: T,
    from?: DLLNode<T>
): DLLNode<T> | undefined {
    const currentNode: DLLNode<T> | undefined = from || dll.head;

    const comparison = compare(element, currentNode.data);

    return comparison === 0
        ? currentNode
        : hasNext(currentNode)
        ? findOne(dll, compare, element, currentNode.next)
        : undefined;
}

/**
 * Creates a find function for the given double linked list with the given compare function.
 * @param compare The compare function.
 * @returns The bound find function.
 */
export function makeFindOne<T>(compare: CompareFunction<T>) {
    return function (dll: DLL<T>, element: T) {
        return findOne(dll, compare, element);
    };
}
