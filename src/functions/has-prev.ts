import { DLLNode, DLLNodeWithPrev } from '../types';

/**
 * Assesses if the given node has a prev node.
 * @param node The source node.
 * @returns True if it has, false if it hasn't.
 */
export function hasPrev<T>(node: DLLNode<T>): node is DLLNodeWithPrev<T> {
    return !!node.prev;
}
