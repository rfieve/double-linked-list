import { hasNodes } from '../functions/has-nodes'
import { toDLL } from '../functions/to-doubly-linked-list'
import { mockedOrderedList } from './_mocks'

describe('hasNodes', () => {
    it('should return true when the given dll has nodes', () => {
        expect(hasNodes(mockedOrderedList)).toBe(true)
    })

    it('should return false when the given dll has no nodes', () => {
        expect(hasNodes(toDLL([]))).toBe(false)
    })
})
