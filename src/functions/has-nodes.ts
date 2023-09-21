import { DLL, DLLWithNodes } from '../types';

/**
 * Assesses that the given doubly linked list is not empty.
 * @param dll The source doubly linked list.
 * @returns True if is, false if it is not.
 */
export function hasNodes<T>(dll: DLL<T>): dll is DLLWithNodes<T> {
    return !!dll.head && !!dll.tail;
}
