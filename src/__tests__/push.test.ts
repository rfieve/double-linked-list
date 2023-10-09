import { push } from '../functions/push';
import { makeEmptyDLL } from '../helpers/make-dll';
import { DLL, DLLNode, DLLWithNodes } from '../types';

describe('push', () => {
    let prev: DLLNode<number>,
        curr: DLLNode<number>,
        next: DLLNode<number>,
        dll: DLLWithNodes<number>;

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

    it('should push one element to an empty list correctly', () => {
        const empty: DLL<number> = makeEmptyDLL();

        push(empty, 1);
        push(empty, 2);
        push(empty, 3);

        expect(empty.length).toEqual(3);
        expect(empty.head?.data).toBe(1);
        expect(empty.head?.next?.data).toBe(2);
        expect(empty.head?.next?.next?.data).toBe(3);

        expect(empty.tail?.data).toBe(3);
        expect(empty.tail?.prev?.data).toBe(2);
        expect(empty.tail?.prev?.prev?.data).toBe(1);
    });

    it('should push multiple elements to an empty list correctly', () => {
        const empty: DLL<number> = makeEmptyDLL();

        push(empty, [1, 2, 3]);

        expect(empty.length).toEqual(3);
        expect(empty.head?.data).toBe(1);
        expect(empty.head?.next?.data).toBe(2);
        expect(empty.head?.next?.next?.data).toBe(3);

        expect(empty.tail?.data).toBe(3);
        expect(empty.tail?.prev?.data).toBe(2);
        expect(empty.tail?.prev?.prev?.data).toBe(1);
    });
});
