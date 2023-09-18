import { Direction, DLL, DLLNode } from '../types';
import { traverseFrom } from './traverse-from';

export function traverseInReverse<T>(dll: DLL<T>, cb: (node: DLLNode<T>) => void) {
    traverseFrom(dll.tail, Direction.Prev, cb);
}
