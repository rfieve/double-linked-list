import { map } from '../functions/map';
import { toArrayInOrder } from '../functions/to-array';
import { toDLL } from '../functions/to-doubly-linked-list';
import { mapToString, mockedArray } from './_mocks';

describe('map', () => {
    it('should map a dll correctly', () => {
        const dll = toDLL(mockedArray);
        const mapped = map(dll, mapToString);
        const asArray = toArrayInOrder(mapped);

        expect(asArray).toEqual(['10', '32', '13', '2', '89', '5', '50']);
    });
});
