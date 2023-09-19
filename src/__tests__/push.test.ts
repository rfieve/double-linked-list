import { push } from '../functions/push';
import { DLL, DLLNode } from '../types';

describe('push', () => {
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

    it('should push one element as tail node by default', () => {
        push(dll, 3);

        expect(dll.length).toEqual(4);
        expect(dll.head).toBe(prev);
        expect(dll.tail.prev).toBe(next);
        expect(dll.tail.data).toBe(3);
    });

    it('should push multiple elements as tail nodes by default', () => {
        push(dll, [3, 4]);

        expect(dll.length).toEqual(5);
        expect(dll.head).toBe(prev);
        expect(dll.tail.prev?.prev).toBe(next);
        expect(dll.tail.prev?.data).toBe(3);
        expect(dll.tail.data).toBe(4);
    });
});
