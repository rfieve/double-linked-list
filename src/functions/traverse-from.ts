import { Direction, DLLNode } from '../types';

/**
 * Traverses the list from a specific node in the specified direction,
 * inkoking the callback on each traversed node.
 * @param node the node to start the traversal from.
 * @param direction the direction to follow (prev/next).
 * @param cb the callback to invoke on each traversed node.
 */
export function traverseFrom<T>(
    node: DLLNode<T>,
    direction: Direction,
    cb: (node: DLLNode<T>) => void
) {
    let currentNode: DLLNode<T> | undefined = node;

    while (currentNode) {
        cb(currentNode);

        currentNode = currentNode[direction];
    }
}
