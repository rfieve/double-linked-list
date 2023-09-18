export enum Direction {
    Next = 'next',
    Prev = 'prev',
}

/**
 * The function used to determine the order of the elements.
 * @param current The current element
 * @param compared The element compared to
 * @return {number} The comparison result. It can be negative, zero or positive:
 *
 *  => Negative : the current element should be placed as left node of its compared element
 *
 *  => Zero     : the current element should be placed here in the list
 *
 *  => Positive : the current element should be placed as right node of its compared element
 */
export type CompareFunction<T> = (current: T, compared: T) => number;

export type DLLNode<T> = {
    data              : T;
    [Direction.Next]? : DLLNode<T>;
    [Direction.Prev]? : DLLNode<T>;
};

export type DLL<T> = {
    head   : Omit<DLLNode<T>, Direction.Prev>;
    length : number;
    tail   : Omit<DLLNode<T>, Direction.Next>;
};
