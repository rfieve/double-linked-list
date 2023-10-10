import { mapToString, mockedArray } from './_mocks'
import { map } from '../functions/map'
import { toArrayInOrder } from '../functions/to-array'
import { toDLL } from '../functions/to-doubly-linked-list'

describe('map', () => {
    it('should map a dll correctly', () => {
        const dll = toDLL(mockedArray),
              mapped = map(dll, mapToString),
              asArray = toArrayInOrder(mapped)

        expect(asArray).toEqual(['10', '32', '13', '2', '89', '5', '50'])
    })
})
