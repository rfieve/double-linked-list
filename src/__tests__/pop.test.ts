import { pop } from '../functions/pop';
import { toDLL } from '../functions/to-doubly-linked-list';
import { mockedArray } from './_mocks';

describe('pop', () => {
    it('should pop a dll correctly', () => {
        const dll = toDLL(mockedArray);

        pop(dll);
        expect(dll.length).toBe(6);
        expect(dll.tail.data).toBe(5);

        pop(dll, 2);
        expect(dll.length).toBe(4);
        expect(dll.tail.data).toBe(2);
    });
});
