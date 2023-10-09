import { pop } from '../functions/pop'
import { toDLL } from '../functions/to-doubly-linked-list'
import { makeEmptyDLL } from '../helpers/make-dll'
import { DLL, DLLWithNodes } from '../types'
import { mockedArray } from './_mocks'

describe('pop', () => {
    it('should pop a dll correctly', () => {
        const dll = toDLL(mockedArray) as DLLWithNodes<number>

        pop(dll)
        expect(dll.length).toBe(6)
        expect(dll.tail.data).toBe(5)

        pop(dll, 2)
        expect(dll.length).toBe(4)
        expect(dll.tail.data).toBe(2)
    })

    it('should pop an empty dll correctly', () => {
        const empty: DLL<number> = makeEmptyDLL()

        pop(empty)
        expect(empty.length).toBe(0)
        expect(empty.tail).toBeUndefined()
        expect(empty.head).toBeUndefined()
    })
})
