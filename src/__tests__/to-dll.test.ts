import { makeToDLL, toDLL } from '../functions/to-dll';
import { compare, mockedArray } from './_mocks';

describe('toDLL', () => {
    const bound = makeToDLL(compare);

    it('should create dll with the array order by default', () => {
        const dll = toDLL(mockedArray);

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
        const dll = bound(mockedArray);

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
});
