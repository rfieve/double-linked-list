export type DLLNode<T> = {
    data : T;
    next : DLLNode<T>;
    prev : DLLNode<T>;
};

export type DLL<T> = {
    head : DLLNode<T>;
    tail : DLLNode<T>;
};
