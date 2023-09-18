import { add, makeAdd } from '../functions/add';
import { DLL, DLLNode } from '../types';
import { compare } from './_mocks';

describe('add', () => {
    let prev: DLLNode<number>;
    let curr: DLLNode<number>;
    let next: DLLNode<number>;
    let dll: DLL<number>;

    const bound = makeAdd(compare);

    beforeEach(() => {
        prev = { data: 0 };
        curr = { data: 1, prev };
        next = { data: 2, prev: curr };

        prev.next = curr;
        curr.next = next;

        dll = { head: prev, length: 3, tail: next };
    });

    it('should add one element as tail node by default', () => {
        add(dll, 3);

        expect(dll.length).toEqual(4);
        expect(dll.head).toBe(prev);
        expect(dll.tail.prev).toBe(next);
        expect(dll.tail.data).toBe(3);
    });

    it('should add multiple elements as tail nodes by default', () => {
        add(dll, [3, 4]);

        expect(dll.length).toEqual(5);
        expect(dll.head).toBe(prev);
        expect(dll.tail.prev?.prev).toBe(next);
        expect(dll.tail.data).toBe(4);
    });

    it('should add one element as head node when compare and lesser than all', () => {
        bound(dll, -1);

        expect(dll.length).toEqual(4);
        expect(dll.tail).toBe(next);
        expect(dll.head.next).toBe(prev);
        expect(dll.head.data).toBe(-1);
    });

    it('should add multiple elements as head nodes when compare and lesser than all', () => {
        bound(dll, [-2, -1]);

        expect(dll.length).toEqual(5);
        expect(dll.tail).toBe(next);
        expect(dll.head.next?.next).toBe(prev);
        expect(dll.head.data).toBe(-2);
    });

    it('should fallback on the tail when compare and greater than all', () => {
        bound(dll, 3);

        expect(dll.length).toEqual(4);
        expect(dll.head).toBe(prev);
        expect(dll.tail.prev).toBe(next);
        expect(dll.tail.data).toBe(3);
    });
});
