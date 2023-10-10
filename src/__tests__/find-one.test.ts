import { mockedOrderedList } from './_mocks'
import { makeCompareUtils } from '../functions/make-compare-utils'
import { makeEmptyDLL } from '../helpers/make-dll'

describe('findOne', () => {
    const { findOne: bound } = makeCompareUtils((a: number, b: number) =>
        a > b + 5 ? 1 : a < b - 5 ? -1 : 0
    )

    it('should return the first matching node', () => {
        const node = bound(mockedOrderedList, 12)
        expect(node?.data).toEqual(10)
    })

    it('should return undefined when no node matches', () => {
        const node = bound(mockedOrderedList, 100)
        expect(node?.data).toBeUndefined()
    })

    it('should return undefined when the list is empty', () => {
        const node = bound(makeEmptyDLL(), 100)
        expect(node?.data).toBeUndefined()
    })
})
