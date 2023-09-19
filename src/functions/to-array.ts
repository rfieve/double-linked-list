import { makeToArrayFromTraversal } from '../helpers/make-to-array-from-traversal';
import { traverseInOrder, traverseInOrderReverse } from './traverse-in-order';

/**
 * Converts the given doubly linked list to an array, with a in order dll traversal.
 * @param dll The source doubly linked list.
 * @returns The sorted array.
 */
export const toArrayInOrder = makeToArrayFromTraversal(traverseInOrder);

/**
 * Converts the given doubly linked list to an array, with a reversed dll traversal.
 * @param dll The source doubly linked list.
 * @returns The sorted array.
 */
export const toArrayInOrderReverse = makeToArrayFromTraversal(traverseInOrderReverse);
