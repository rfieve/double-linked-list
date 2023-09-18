import { Direction, DLLNode } from '../types';

/**
 * Attaches an element as next/prev node of the passed one.
 * @param node The node to attach to.
 * @param element The element to attach as next/prev node.
 * @param direction The direction (next/prev) whereas to attach the element.
 */
export function attach<T>(node: DLLNode<T>, element: T, direction: Direction) {
    const oppositeDirection = direction === Direction.Prev ? Direction.Next : Direction.Prev;

    const { [direction]: replacedNode } = node;

    const newNode = { data: element, [oppositeDirection]: node, [`${direction}`]: replacedNode };

    if (replacedNode) {
        replacedNode[oppositeDirection] = newNode;
    }

    node[direction] = newNode;

    return newNode;
}

/**
 * Attaches an element as next node of the passed one.
 * @param node The node to attach to.
 * @param element The element to attach as next node.
 */
export function attachNext<T>(node: DLLNode<T>, element: T) {
    return attach(node, element, Direction.Next);
}

/**
 * Attaches an element as prev node of the passed one.
 * @param node The node to attach to.
 * @param element The element to attach as prev node.
 */
export function attachPrev<T>(node: DLLNode<T>, element: T) {
    return attach(node, element, Direction.Prev);
}
