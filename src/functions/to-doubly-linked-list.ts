import { makeEmptyDLL, makeOneNodeDLL, makeTwoNodesDLL } from '../helpers/make-dll';
import { CompareFunction } from '../types';
import { insert } from './insert';
import { push } from './push';

/**
 * Converts the given array to a doubly linked list, depending on a given compare function.
 * @param elements The source array.
 * @param compare The compare function.
 * @returns The elements of the elements array organized as a doubly linked list.
 */
export function toDLL<T>(elements = [] as T[], compare?: CompareFunction<T>) {
    if (elements.length === 0) {
        return makeEmptyDLL();
    }

    if (elements.length === 1) {
        return makeOneNodeDLL(elements[0]);
    }

    const copied = elements.slice(),
          sorted = compare ? copied.sort(compare) : copied,
          dll = makeTwoNodesDLL(sorted.shift() as T, sorted.shift() as T);

    return compare ? insert(dll, sorted, compare) : push(dll, sorted);
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
