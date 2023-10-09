import { attach, attachNext, attachPrev } from '../functions/attach'
import { Direction, DLLNode } from '../types'

describe('attach', () => {
    let prev: DLLNode<number>, curr: DLLNode<number>, next: DLLNode<number>

    beforeEach(() => {
        prev = { data: 0 }
        curr = { data: 1, prev }
        next = { data: 3, prev: curr }

        prev.next = curr
        curr.next = next
    })

    it('should attach the element as next node when direction is Next', () => {
        attach(curr, 2, Direction.Next)

        expect(curr.next?.data).toEqual(2)
        expect(curr.next?.prev).toBe(curr)
    })

    it('should attach the element as prev node when direction is Prev', () => {
        attach(curr, 0, Direction.Prev)

        expect(curr.prev?.data).toEqual(0)
        expect(curr.prev?.next).toBe(curr)
    })
})

describe('attachNext', () => {
    let node: DLLNode<number>

    beforeEach(() => {
        node = { data: 1, next: undefined, prev: undefined }
    })

    it('should attach the element as next node', () => {
        attachNext(node, 2)

        expect(node.next?.data).toEqual(2)
        expect(node.next?.prev).toBe(node)
    })
})

describe('attachPrev', () => {
    let node: DLLNode<number>

    beforeEach(() => {
        node = { data: 1, next: undefined, prev: undefined }
    })

    it('should attach the element as prev node', () => {
        attachPrev(node, 0)

        expect(node.prev?.data).toEqual(0)
        expect(node.prev?.next).toBe(node)
    })
})
