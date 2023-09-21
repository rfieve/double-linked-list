import { shift } from '../functions/shift';
import { toDLL } from '../functions/to-doubly-linked-list';
import { mockedArray } from './_mocks';

describe('shift', () => {
    it('should shift a dll correctly', () => {
        const dll = toDLL(mockedArray);

        shift(dll);
        expect(dll.length).toBe(6);
        expect(dll.head.data).toBe(32);

        shift(dll, 2);
        expect(dll.length).toBe(4);
        expect(dll.head.data).toBe(2);
    });
});
