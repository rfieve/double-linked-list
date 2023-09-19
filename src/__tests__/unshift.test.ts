import { unshift } from '../functions/unshift';
import { DLL, DLLNode } from '../types';

describe('unshift', () => {
    let prev: DLLNode<number>;
    let curr: DLLNode<number>;
    let next: DLLNode<number>;
    let dll: DLL<number>;

    beforeEach(() => {
        prev = { data: 0 };
        curr = { data: 1, prev };
        next = { data: 2, prev: curr };

        prev.next = curr;
        curr.next = next;

        dll = { head: prev, length: 3, tail: next };
    });

    it('should unshift one element as tail node by default', () => {
        unshift(dll, 3);

        expect(dll.length).toEqual(4);
        expect(dll.head.data).toBe(3);
        expect(dll.head.next).toBe(prev);
    });

    it('should unshift multiple elements as tail nodes by default', () => {
        unshift(dll, [3, 4]);

        expect(dll.length).toEqual(5);
        expect(dll.head.data).toBe(3);
        expect(dll.head.next?.data).toBe(4);
        expect(dll.head.next?.next).toBe(prev);
    });
});
