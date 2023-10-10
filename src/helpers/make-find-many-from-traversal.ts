import { makeCollectNode } from './collect'
import { hasNodes } from '../functions/has-nodes'
import { CompareFunction, DLL, DLLNode } from '../types'

export function makeFindManyFromTraversal<T>(
    traverse: (
        cb: (node: DLLNode<T>) => void,
        node: DLLNode<T>,
        compare: CompareFunction<T>,
        element: T
    ) => void
) {
    return function findMany(dll: DLL<T>, compare: CompareFunction<T>, element: T): DLLNode<T>[] {
        const nodes: DLLNode<T>[] = []

        if (hasNodes(dll)) {
            const collect = makeCollectNode(nodes)

            traverse(collect, dll.head, compare, element)
        }

        return nodes
    }
}
