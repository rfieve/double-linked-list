import { CompareFunction, DLLNode } from '../types'

/**
 * Finds the next node to be greater or equal than the element with the compare function.
 * @param node The node to compare.
 * @param element The element to attach as next/prev node.
 * @param compare The compare function.
 * @returns The next greater node.
 */
export function findNextGte<T>(
    node: DLLNode<T>,
    element: T,
    compare: CompareFunction<T>
): DLLNode<T> | undefined {
    const comparison = compare(element, node.data)

    if (comparison <= 0) {
        return node
    }

    return node.next ? findNextGte(node.next, element, compare) : undefined
}
