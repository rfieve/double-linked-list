import {
    toArrayInOrder,
    toArrayInOrderReverse,
    toArrayMapInOrder,
    toArrayMapInOrderReverse,
} from '../functions/to-array'
import { mapToString, mockedArrayInOrder, mockedOrderedList } from './_mocks'

describe('toArrayInOrder', () => {
    it('should convert dll to an array correctly', () => {
        expect(toArrayInOrder(mockedOrderedList)).toEqual(mockedArrayInOrder)
    })
})

describe('toArrayInOrderReverse', () => {
    it('should convert dll to an array correctly', () => {
        expect(toArrayInOrderReverse(mockedOrderedList)).toEqual(
            mockedArrayInOrder.slice().reverse()
        )
    })
})

describe('toArrayMapInOrder', () => {
    it('should convert dll to an array correctly', () => {
        expect(toArrayMapInOrder(mockedOrderedList, mapToString)).toEqual([
            '2',
            '5',
            '10',
            '13',
            '32',
            '50',
            '89',
        ])
    })
})

describe('toArrayMapInOrderReverse', () => {
    it('should convert dll to an array correctly', () => {
        expect(toArrayMapInOrderReverse(mockedOrderedList, mapToString)).toEqual([
            '89',
            '50',
            '32',
            '13',
            '10',
            '5',
            '2',
        ])
    })
})
