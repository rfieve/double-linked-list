import { Direction, DLLNode } from 'src/types';

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
