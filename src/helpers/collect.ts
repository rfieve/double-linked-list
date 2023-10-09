import { DLLNode } from '../types'

export function makeCollectElement<T>(elements: T[]) {
    return function collectElement(element: T) {
        elements.push(element)
    }
}

export function makeCollectNode<T>(nodes: DLLNode<T>[]) {
    return function collectNode(node: DLLNode<T>) {
        nodes.push(node)
    }
}
