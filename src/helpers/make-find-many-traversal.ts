import { hasNext } from '../functions/has-next'
import { CompareFunction, DLLNode } from '../types'

export function makeFindManyTraversal(shouldFindCurrent: (comparion: number) => boolean) {
    return function traverse<T>(
        cb: (node: DLLNode<T>) => void,
        node: DLLNode<T>,
        compare: CompareFunction<T>,
        element: T
    ): void {
        const comparison = compare(element, node.data)

        if (shouldFindCurrent(comparison)) {
            cb(node)
        }

        if (hasNext(node)) {
            traverse(cb, node.next, compare, element)
        }
    }
}
