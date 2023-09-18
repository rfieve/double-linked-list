import { findNextGte } from '../functions/find-next-gte';
import { compare, mockedOrderedList } from './_mocks';

describe('findNextGte', () => {
    it('should return the next greater node', () => {
        const node = findNextGte(mockedOrderedList.head, 12, compare);
        expect(node?.data).toEqual(13);
    });

    it('should return the next equal node', () => {
        const node = findNextGte(mockedOrderedList.head, 13, compare);
        expect(node?.data).toEqual(13);
    });

    it('should return undefined when no node matcheds', () => {
        const node = findNextGte(mockedOrderedList.head, 100, compare);
        expect(node?.data).toBeUndefined();
    });
});
