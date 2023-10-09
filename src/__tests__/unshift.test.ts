import { unshift } from '../functions/unshift'
import { makeEmptyDLL } from '../helpers/make-dll'
import { DLL, DLLNode, DLLWithNodes } from '../types'

describe('unshift', () => {
    let prev: DLLNode<number>,
        curr: DLLNode<number>,
        next: DLLNode<number>,
        dll: DLLWithNodes<number>

    beforeEach(() => {
        prev = { data: 0 }
        curr = { data: 1, prev }
        next = { data: 2, prev: curr }

        prev.next = curr
        curr.next = next

        dll = { head: prev, length: 3, tail: next }
    })

    it('should unshift one element as tail node by default', () => {
        unshift(dll, 3)

        expect(dll.length).toEqual(4)
        expect(dll.head.data).toBe(3)
        expect(dll.head.next).toBe(prev)
    })

    it('should unshift multiple elements as tail nodes by default', () => {
        unshift(dll, [3, 4])

        expect(dll.length).toEqual(5)
        expect(dll.head.data).toBe(3)
        expect(dll.head.next?.data).toBe(4)
        expect(dll.head.next?.next).toBe(prev)
    })

    it('should unshift one element to an empty list correctly', () => {
        const empty: DLL<number> = makeEmptyDLL()

        unshift(empty, 3)
        unshift(empty, 2)
        unshift(empty, 1)

        expect(empty.length).toEqual(3)
        expect(empty.head?.data).toBe(1)
        expect(empty.head?.next?.data).toBe(2)
        expect(empty.head?.next?.next?.data).toBe(3)

        expect(empty.tail?.data).toBe(3)
        expect(empty.tail?.prev?.data).toBe(2)
        expect(empty.tail?.prev?.prev?.data).toBe(1)
    })

    it('should unshift multiple elements to an empty list correctly', () => {
        const empty: DLL<number> = makeEmptyDLL()

        unshift(empty, [2, 3])
        unshift(empty, 1)

        expect(empty.length).toEqual(3)
        expect(empty.head?.data).toBe(1)
        expect(empty.head?.next?.data).toBe(2)
        expect(empty.head?.next?.next?.data).toBe(3)

        expect(empty.tail?.data).toBe(3)
        expect(empty.tail?.prev?.data).toBe(2)
        expect(empty.tail?.prev?.prev?.data).toBe(1)
    })
})
