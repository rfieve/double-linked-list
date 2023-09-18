import { CompareFunction, DLL } from '../types';
import { add } from './add';

/**
 * Converts the given array to a double linked list, depending on a given compare function.
 * @param elements The source array.
 * @param compare The compare function.
 * @returns The elements of the elements array organized as a double linked list.
 */
export function toDLL<T>(elements: T[], compare?: CompareFunction<T>): DLL<T> {
    const copied = elements.slice();
    const sorted = compare ? copied.sort(compare) : copied;
    const head = { data: sorted.shift() as T };

    return add({ length: 1, head, tail: head }, sorted);
}

/**
 * Creates a toDLL function for the given compare function.
 * @param compare The compare function.
 * @returns The bound toDLL function.
 */
export function makeToDLL<T>(compare: CompareFunction<T>) {
    return function (elements: T[]) {
        return toDLL(elements, compare);
    };
}
