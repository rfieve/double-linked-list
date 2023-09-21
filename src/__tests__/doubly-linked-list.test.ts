import { DoublyLinkedList } from '../classes/doubly-linked-list';
import {
    compare,
    mapToString,
    mockedArray,
    mockedArrayInOrder,
    mockedOrderedList,
    mockedUnorderedList,
} from './_mocks';

describe('attach', () => {
    let dll: DoublyLinkedList<number>;

    beforeEach(() => {
        dll = new DoublyLinkedList(mockedArray);
    });

    it('should have a correct unordered dll by default', () => {
        expect(dll.dll).toEqual(mockedUnorderedList);
        expect(dll.length).toEqual(mockedUnorderedList.length);
        expect(dll.head).toEqual(mockedUnorderedList.head);
        expect(dll.tail).toEqual(mockedUnorderedList.tail);
    });

    it('should have a correct ordered dll when a compare is provided', () => {
        const list = new DoublyLinkedList(mockedArray, compare);

        expect(list.dll).toEqual(mockedOrderedList);
        expect(list.length).toEqual(mockedOrderedList.length);
        expect(list.head).toEqual(mockedOrderedList.head);
        expect(list.tail).toEqual(mockedOrderedList.tail);
    });

    it('should push correctly', () => {
        dll.push(6);
        expect(dll.length).toEqual(8);
        expect(dll.tail.data).toEqual(6);

        dll.push([7, 8]);
        expect(dll.length).toEqual(10);
        expect(dll.tail.data).toEqual(8);
    });

    it('should insert correctly', () => {
        dll.unshift(6);
        expect(dll.length).toEqual(8);
        expect(dll.head.data).toEqual(6);

        dll.unshift([7, 8]);
        expect(dll.length).toEqual(10);
        expect(dll.head.data).toEqual(7);
    });

    it('should insert correctly', () => {
        dll.insert(6);
        expect(dll.length).toEqual(8);
        expect(dll.tail.data).toEqual(6);

        dll.insert([7, 8]);
        expect(dll.length).toEqual(10);
        expect(dll.tail.data).toEqual(8);
    });

    it('should insert correctly with compare', () => {
        dll.sort(compare);

        dll.insert(86, compare);
        expect(dll.length).toEqual(8);
        expect(dll.tail?.prev?.data).toEqual(86);

        dll.insert([87, 88], compare);
        expect(dll.length).toEqual(10);
        expect(dll.tail.data).toEqual(89);
        expect(dll.tail?.prev?.data).toEqual(88);
        expect(dll.tail?.prev?.prev?.data).toEqual(87);
        expect(dll.tail?.prev?.prev?.prev?.data).toEqual(86);
    });

    it('should sort correctly', () => {
        const list = new DoublyLinkedList(mockedArray, compare);

        list.push(1);
        expect(list.tail.data).toBe(1);

        list.sort();
        expect(list.head.data).toBe(1);
        expect(list.tail.data).toBe(89);
    });

    it('should sort correctly with new compare', () => {
        const list = new DoublyLinkedList(mockedArray, compare);

        list.push(1);
        expect(list.tail.data).toBe(1);

        list.sort((a: number, b: number) => b - a);
        expect(list.head.data).toBe(89);
        expect(list.tail.data).toBe(1);
    });

    it('should toArrayInOrder', () => {
        const list = dll.sort(compare);
        expect(list.toArrayInOrder()).toEqual(mockedArrayInOrder);
    });

    it('should toArrayInOrderReverse', () => {
        const list = dll.sort(compare);
        expect(list.toArrayInOrderReverse()).toEqual(mockedArrayInOrder.slice().reverse());
    });

    it('should toArrayMapInOrder', () => {
        const list = dll.sort(compare);
        expect(list.toArrayMapInOrder(mapToString)).toEqual([
            '2',
            '5',
            '10',
            '13',
            '32',
            '50',
            '89',
        ]);
    });

    it('should toArrayMapInOrderReverse', () => {
        const list = dll.sort(compare);
        expect(list.toArrayMapInOrderReverse(mapToString)).toEqual([
            '89',
            '50',
            '32',
            '13',
            '10',
            '5',
            '2',
        ]);
    });
});
