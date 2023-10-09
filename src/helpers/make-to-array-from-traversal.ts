import { DLL, DLLNode, MapFunction, TraverseFunction } from '../types'

function toArray<T>(dll: DLL<T>, traverse: TraverseFunction<T>) {
    const elements: T[] = [],
          collect = (node: DLLNode<T>) => elements.push(node.data)

    traverse(dll, collect)

    return elements
}

function toArrayMap<T, U>(dll: DLL<T>, traverse: TraverseFunction<T>, mapper: MapFunction<T, U>) {
    let index = 0

    const elements: U[] = [],
          collect = (node: DLLNode<T>) => elements.push(mapper(node, index++))

    traverse(dll, collect)

    return elements
}

export function makeToArrayFromTraversal<T>(traverse: TraverseFunction<T>) {
    return function (dll: DLL<T>) {
        return toArray(dll, traverse)
    }
}

export function makeToArrayMapFromTraversal(traverse: TraverseFunction<unknown>) {
    return function <T, U>(dll: DLL<T>, mapper: MapFunction<T, U>) {
        return toArrayMap(dll, traverse as TraverseFunction<T>, mapper)
    }
}
