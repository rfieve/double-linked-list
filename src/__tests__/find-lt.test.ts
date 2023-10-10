import { compare, mockedOrderedList } from './_mocks'
import { makeFindLt } from '../functions/find-lt'

describe('findLt', () => {
    const bound = makeFindLt(compare)

    it('should include all the lesser nodes', () => {
        const nodes = bound(mockedOrderedList, 12)

        expect(nodes[0]?.data).toEqual(2)
        expect(nodes[1]?.data).toEqual(5)
        expect(nodes[2]?.data).toEqual(10)
        expect(nodes[3]?.data).toBeUndefined()
    })

    it('should not include the equivalent node', () => {
        const nodes = bound(mockedOrderedList, 13)
        expect(nodes[2]?.data).toEqual(10)
    })

    it('should return undefined when no node matches', () => {
        const nodes = bound(mockedOrderedList, 0)
        expect(nodes[0]?.data).toBeUndefined()
    })
})
