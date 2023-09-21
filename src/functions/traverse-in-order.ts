import { Direction, DLL, TraverseCallback } from '../types';
import { hasNodes } from './has-nodes';
import { traverseFrom } from './traverse-from';

/**
 * Traverses the doubly linked list in order (head to tail),
 * inkoking the callback on each traversed node.
 * @param dll the doubly linked list to traverse.
 * @param cb the callback to invoke on each traversed node.
 */
export function traverseInOrder<T>(dll: DLL<T>, cb: TraverseCallback<T>) {
    if (hasNodes(dll)) {
        traverseFrom(dll.head, Direction.Next, cb);
    }
}

/**
 * Traverses the doubly linked list in reversed order (tail to head),
 * inkoking the callback on each traversed node.
 * @param dll the doubly linked list to traverse.
 * @param cb the callback to invoke on each traversed node.
 */
export function traverseInOrderReverse<T>(dll: DLL<T>, cb: TraverseCallback<T>) {
    if (hasNodes(dll)) {
        traverseFrom(dll.tail, Direction.Prev, cb);
    }
}
