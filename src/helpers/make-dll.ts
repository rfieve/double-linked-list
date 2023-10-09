import { DLLNode, DLLWithNodes } from '../types';

export function makeEmptyDLL() {
    return { head: undefined, length: 0, tail: undefined };
}

export function makeOneNodeDLL<T>(element: T): DLLWithNodes<T> {
    const head = { data: element };

    return { length: 1, head, tail: head };
}

export function makeTwoNodesDLL<T>(first: T, second: T): DLLWithNodes<T> {
    const head: DLLNode<T> = { data: first },
          tail: DLLNode<T> = { data: second };

    tail.prev = head;
    head.next = tail;

    return { length: 2, head, tail };
}
