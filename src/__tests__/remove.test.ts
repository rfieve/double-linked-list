import { makeRemove } from '../functions/remove';
import { DLLNode, DLLWithNodes } from '../types';
import { compare } from './_mocks';

describe('remove', () => {
    let prev: DLLNode<number>,
        curr: DLLNode<number>,
        next: DLLNode<number>,
        dll: DLLWithNodes<number>;

    const bound = makeRemove(compare);

    beforeEach(() => {
        prev = { data: 0 };
        curr = { data: 1, prev };
        next = { data: 2, prev: curr };

        prev.next = curr;
        curr.next = next;

        dll = { head: prev, length: 3, tail: next };
    });

    it('should remove one element correctly', () => {
        bound(dll, 1);

        expect(dll.length).toEqual(2);
        expect(dll.head).toBe(prev);
        expect(dll.tail).toBe(next);
        expect(dll.head.next).toBe(next);
        expect(dll.tail.prev).toBe(prev);
    });

    it('should remove the head element correctly', () => {
        bound(dll, 0);

        expect(dll.length).toEqual(2);
        expect(dll.head).toBe(curr);
        expect(dll.tail).toBe(next);
        expect(dll.head.next).toBe(next);
        expect(dll.tail.prev).toBe(curr);
    });

    it('should remove the tail element correctly', () => {
        bound(dll, 2);

        expect(dll.length).toEqual(2);
        expect(dll.head).toBe(prev);
        expect(dll.tail).toBe(curr);
        expect(dll.head.next).toBe(curr);
        expect(dll.tail.prev).toBe(prev);
    });

    it('should not remove any element when no match', () => {
        bound(dll, 5);

        expect(dll.length).toEqual(3);
        expect(dll.head).toBe(prev);
        expect(dll.tail).toBe(next);
        expect(dll.head.next).toBe(curr);
        expect(dll.tail.prev).toBe(curr);
    });

    it('should remove multiple elements correctly', () => {
        bound(dll, [0, 2]);

        expect(dll.length).toEqual(1);
        expect(dll.head).toBe(curr);
        expect(dll.tail).toBe(curr);
        expect(dll.tail.data).toBe(1);
    });
});
