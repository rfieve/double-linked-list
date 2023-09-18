import { Direction, DLL, DLLNode } from '../types';
import { traverseFrom } from './traverse-from';

/**
 * Traverses the double linked list in reversed order (tail to head),
 * inkoking the callback on each traversed node.
 * @param dll the double linked list to traverse.
 * @param cb the callback to invoke on each traversed node.
 */
export function traverseInReverse<T>(dll: DLL<T>, cb: (node: DLLNode<T>) => void) {
    traverseFrom(dll.tail, Direction.Prev, cb);
}
