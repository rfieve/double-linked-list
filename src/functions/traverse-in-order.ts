import { Direction, DLL, DLLNode } from '../types';
import { traverseFrom } from './traverse-from';

export function traverseInOrder<T>(dll: DLL<T>, cb: (node: DLLNode<T>) => void) {
    traverseFrom(dll.head, Direction.Next, cb);
}
