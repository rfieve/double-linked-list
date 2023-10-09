import { toDLL } from '../functions/to-doubly-linked-list'
import { DLLNode, DLLWithNodes } from '../types'

export function compare(a: number, b: number) {
    return a - b
}

export function mapToString(node: DLLNode<number>) {
    return `${node.data}`
}

export const mockedArray = [10, 32, 13, 2, 89, 5, 50],
             mockedArrayInOrder = mockedArray.slice().sort((a, b) => a - b),
             mockedUnorderedList = toDLL(mockedArray) as DLLWithNodes<number>, // 10 <-> 32 <-> 13 <-> 2 <-> 89 <-> 5 <-> 50
             mockedOrderedList = toDLL(mockedArray, compare) as DLLWithNodes<number> // 2 <-> 5 <-> 10 <-> 13 <-> 32 <-> 50 <-> 89
