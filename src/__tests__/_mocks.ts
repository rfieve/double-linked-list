import { toDLL } from '../functions/to-doubly-linked-list';
import { DLL, DLLNode } from '../types';

export function compare(a: number, b: number) {
    return a - b;
}

export function mapToString(node: DLLNode<number>) {
    return `${node.data}`;
}

export const mockedArray = [10, 32, 13, 2, 89, 5, 50];
export const mockedArrayInOrder = mockedArray.slice().sort((a, b) => a - b);

// 10 <-> 32 <-> 13 <-> 2 <-> 89 <-> 5 <-> 50
export const mockedUnorderedList: DLL<number> = toDLL(mockedArray);

// 2 <-> 5 <-> 10 <-> 13 <-> 32 <-> 50 <-> 89
export const mockedOrderedList: DLL<number> = toDLL(mockedArray, compare);
