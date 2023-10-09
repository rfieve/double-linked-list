import { shift } from '../functions/shift'
import { toDLL } from '../functions/to-doubly-linked-list'
import { makeEmptyDLL } from '../helpers/make-dll'
import { DLL, DLLWithNodes } from '../types'
import { mockedArray } from './_mocks'

describe('shift', () => {
    it('should shift a dll correctly', () => {
        const dll = toDLL(mockedArray) as DLLWithNodes<number>

        shift(dll)
        expect(dll.length).toBe(6)
        expect(dll.head.data).toBe(32)

        shift(dll, 2)
        expect(dll.length).toBe(4)
        expect(dll.head.data).toBe(2)
    })

    it('should shift an empty dll correctly', () => {
        const empty: DLL<number> = makeEmptyDLL()

        shift(empty)
        expect(empty.length).toBe(0)
        expect(empty.tail).toBeUndefined()
        expect(empty.head).toBeUndefined()
    })
})
