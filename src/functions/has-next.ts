import { DLLNode, DLLNodeWithNext } from '../types';

/**
 * Assesses if the given node has a next node.
 * @param node The source node.
 * @returns True if it has, false if it hasn't.
 */
export function hasNext<T>(node: DLLNode<T>): node is DLLNodeWithNext<T> {
    return !!node.next;
}
