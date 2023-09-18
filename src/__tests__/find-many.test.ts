import { makeCompareUtils } from '../functions/make-compare-utils';
import { mockedOrderedList } from './_mocks';

describe('findMany', () => {
    const { findMany: bound } = makeCompareUtils((a: number, b: number) =>
        a > b + 5 ? 1 : a < b - 5 ? -1 : 0
    );

    it('should include all the matching nodes', () => {
        const nodes = bound(mockedOrderedList, 12);

        expect(nodes[0]?.data).toEqual(10);
        expect(nodes[1]?.data).toEqual(13);
        expect(nodes[2]?.data).toBeUndefined();
    });

    it('should return undefined when no node matches', () => {
        const nodes = bound(mockedOrderedList, 100);
        expect(nodes[0]?.data).toBeUndefined();
    });
});
