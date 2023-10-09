import { DLL, DLLNode, ReduceFunction } from '../types';
import { traverseInOrder } from './traverse-in-order';

/**
 * Reduces the dll nodes with transformation.
 * @param dll The source doubly linked list.
 * @param reducer The function to transform the nodes.
 * @returns The reduction result.
 */
export function reduce<T, U>(dll: DLL<T>, reducer: ReduceFunction<T, U>, init: U): U {
    let index = 0,
        acc = init;

    traverseInOrder(dll, (node: DLLNode<T>) => {
        acc = reducer(acc, node, index);
        index++;
    });

    return acc;
}
