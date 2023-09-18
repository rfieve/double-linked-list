import { makeCompareUtils } from '../functions/make-compare-utils';
import { mockedOrderedList } from './_mocks';

describe('findOne', () => {
    const { findOne: bound } = makeCompareUtils((a: number, b: number) =>
        a > b + 5 ? 1 : a < b - 5 ? -1 : 0
    );

    it('should return the first matching node', () => {
        const node = bound(mockedOrderedList, 12);
        expect(node?.data).toEqual(10);
    });

    it('should return undefined when no node matches', () => {
        const node = bound(mockedOrderedList, 100);
        expect(node?.data).toBeUndefined();
    });
});
