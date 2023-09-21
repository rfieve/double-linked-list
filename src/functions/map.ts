import { DLL, MapFunction } from '../types';
import { toArrayMapInOrder } from './to-array';
import { toDLL } from './to-doubly-linked-list';

/**
 * Reduces the dll nodes with transformation.
 * @param dll The source doubly linked list.
 * @param mapper The function to transform the nodes.
 * @returns The reduction result.
 */
export function map<T, U>(dll: DLL<T>, mapper: MapFunction<T, U>): DLL<U> {
    return toDLL(toArrayMapInOrder(dll, mapper));
}
