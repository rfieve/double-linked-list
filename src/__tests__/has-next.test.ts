import { hasNext } from '../functions/has-next'
import { mockedOrderedList } from './_mocks'

describe('hasNext', () => {
    it('should return true when the given node has next', () => {
        expect(hasNext(mockedOrderedList.head)).toBe(true)
    })

    it('should return false when the given node has no next', () => {
        expect(hasNext(mockedOrderedList.tail)).toBe(false)
    })
})
