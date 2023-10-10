import { mockedOrderedList } from './_mocks'
import { hasPrev } from '../functions/has-prev'

describe('hasPrev', () => {
    it('should return true when the given node has prev', () => {
        expect(hasPrev(mockedOrderedList.tail)).toBe(true)
    })

    it('should return false when the given node has no prev', () => {
        expect(hasPrev(mockedOrderedList.head)).toBe(false)
    })
})
