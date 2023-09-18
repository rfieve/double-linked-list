import { makeToArrayFromTraversal } from '../helpers/make-to-array-from-traversal';
import { traverseInOrder } from './traverse-in-order';
import { traverseInReverse } from './traverse-in-reverse';

/**
 * Converts the given double linked list to an array, with a in order dll traversal.
 * @param dll The source double linked list.
 * @returns The sorted array.
 */
export const toArrayInOrder = makeToArrayFromTraversal(traverseInOrder);

/**
 * Converts the given double linked list to an array, with a reversed dll traversal.
 * @param dll The source double linked list.
 * @returns The sorted array.
 */
export const toArrayInReverse = makeToArrayFromTraversal(traverseInReverse);
