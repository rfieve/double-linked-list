import { makeToDLL, toDLL } from '../functions/to-doubly-linked-list';
import { DLLWithNodes } from '../types';
import { compare, mockedArray } from './_mocks';

describe('toDLL', () => {
    const bound = makeToDLL(compare);

    it('should create dll with the array order by default', () => {
        const dll = toDLL(mockedArray) as DLLWithNodes<number>;

        expect(dll.length).toBe(7);
        expect(dll.head.data).toBe(10);
        expect(dll.tail.data).toBe(50);

        expect(dll.head.next?.data).toBe(32);
        expect(dll.head.next?.next?.data).toBe(13);
        expect(dll.head.next?.next?.next?.data).toBe(2);
        expect(dll.head.next?.next?.next?.next?.data).toBe(89);
        expect(dll.head.next?.next?.next?.next?.next?.data).toBe(5);
        expect(dll.head.next?.next?.next?.next?.next?.next?.data).toBe(50);
        expect(dll.head.next?.next?.next?.next?.next?.next?.next?.data).toBeUndefined();
    });

    it('should create dll with the sorted order when a compare function is provided', () => {
        const dll = bound(mockedArray) as DLLWithNodes<number>;

        expect(dll.length).toBe(7);
        expect(dll.head.data).toBe(2);
        expect(dll.tail.data).toBe(89);

        expect(dll.head.next?.data).toBe(5);
        expect(dll.head.next?.next?.data).toBe(10);
        expect(dll.head.next?.next?.next?.data).toBe(13);
        expect(dll.head.next?.next?.next?.next?.data).toBe(32);
        expect(dll.head.next?.next?.next?.next?.next?.data).toBe(50);
        expect(dll.head.next?.next?.next?.next?.next?.next?.data).toBe(89);
        expect(dll.head.next?.next?.next?.next?.next?.next?.next?.data).toBeUndefined();
    });

    it('should create an empty dll correctly when invoked without arg', () => {
        const empty = toDLL();

        expect(empty.length).toBe(0);
        expect(empty.tail).toBeUndefined();
        expect(empty.head).toBeUndefined();
    });
});
