import { makeCollectElementFromNode } from '../helpers/collect';
import { DLL, DLLNode } from '../types';

export function makeToArrayFromTraversal<T>(
    traverse: (dll: DLL<T>, cb: (node: DLLNode<T>) => void) => void
) {
    return function toArray(dll: DLL<T>) {
        const elements: T[] = [];
        const collect = makeCollectElementFromNode(elements);

        traverse(dll, collect);

        return elements;
    };
}
