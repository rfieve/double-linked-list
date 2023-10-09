import { CompareFunction, DLL, DLLNode, DLLWithNodes } from '../types';
import { attachNext, attachPrev } from './attach';
import { findNextGte } from './find-next-gte';
import { hasNodes } from './has-nodes';
import { toDLL } from './to-doubly-linked-list';

function insertElement<T>(
    dll: DLLWithNodes<T>,
    element: T,
    compare: CompareFunction<T>,
    from?: DLLNode<T>
) {
    dll.length++;

    const target = findNextGte(from || dll.head, element, compare) ?? dll.tail,
          comparison = compare(element, target.data),
          attach = comparison < 0 ? attachPrev : attachNext;

    return target === dll.tail && comparison > 0
        ? (dll.tail = attach(target, element))
        : target === dll.head
            ? (dll.head = attach(target, element))
            : attach(target, element);
}

function insertElements<T>(
    dll: DLLWithNodes<T>,
    elements: T[],
    compare: CompareFunction<T>,
    from?: DLLNode<T>
) {
    const sorted = elements.slice().sort(compare);

    let prev = from;

    for (const element of sorted) {
        prev = insertElement(dll, element, compare, prev);
    }
}

/**
 * Inserts the given elements to the given doubly linked list in place.
 * @param dll The source doubly linked list.
 * @param elements The nodes to be inserted.
 * @param compare The compare function.
 * @param from The node to start the insersion from.
 * @returns The doubly linked list.
 */
export function insert<T>(
    dll: DLL<T>,
    elements: T | T[],
    compare: CompareFunction<T>,
    from?: DLLNode<T>
): DLL<T> {
    const isArray = Array.isArray(elements);

    if (!hasNodes(dll)) {
        return Object.assign(dll, toDLL(isArray ? elements : [elements], compare));
    }

    if (isArray) {
        insertElements(dll, elements, compare, from);
    } else {
        insertElement(dll, elements, compare, from);
    }

    return dll;
}

/**
 * Creates an insert function for the given doubly linked list with the given compare function.
 * @param compare The compare function.
 * @returns The bound insert function.
 */
export function makeInsert<T>(compare: CompareFunction<T>) {
    return function (dll: DLL<T>, elements: T | T[], from?: DLLNode<T>) {
        return insert(dll, elements, compare, from);
    };
}
