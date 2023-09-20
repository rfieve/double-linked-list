import { makeSort } from '../functions/sort';
import { toDLL } from '../functions/to-doubly-linked-list';
import { compare, mockedArray, mockedOrderedList } from './_mocks';

describe('sort', () => {
    const bound = makeSort(compare);

    it('should sort a dll correctly', () => {
        const sorted = bound(toDLL(mockedArray));
        expect(sorted).toEqual(mockedOrderedList);
    });
});
