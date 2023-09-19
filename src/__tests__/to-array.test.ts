import { toArrayInOrder, toArrayInOrderReverse } from '../functions/to-array';
import { mockedArrayInOrder, mockedOrderedList } from './_mocks';

describe('toArrayInOrder', () => {
    it('should convert dll to an array correctly', () => {
        expect(toArrayInOrder(mockedOrderedList)).toEqual(mockedArrayInOrder);
    });
});

describe('toArrayReverse', () => {
    it('should convert dll to an array correctly', () => {
        expect(toArrayInOrderReverse(mockedOrderedList)).toEqual(
            mockedArrayInOrder.slice().reverse()
        );
    });
});
