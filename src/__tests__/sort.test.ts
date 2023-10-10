import { compare, mockedArray, mockedOrderedList } from './_mocks'
import { makeSort } from '../functions/sort'
import { toDLL } from '../functions/to-doubly-linked-list'

describe('sort', () => {
    const bound = makeSort(compare)

    it('should sort a dll correctly', () => {
        const sorted = bound(toDLL(mockedArray))
        expect(sorted).toEqual(mockedOrderedList)
    })
})
