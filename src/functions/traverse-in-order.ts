import { Direction, DLL, DLLNode } from '../types';
import { traverseFrom } from './traverse-from';

/**
 * Traverses the double linked list in order (head to tail),
 * inkoking the callback on each traversed node.
 * @param dll the double linked list to traverse.
 * @param cb the callback to invoke on each traversed node.
 */
export function traverseInOrder<T>(dll: DLL<T>, cb: (node: DLLNode<T>) => void) {
    traverseFrom(dll.head, Direction.Next, cb);
}
