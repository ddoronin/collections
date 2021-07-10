export class DLNode<V> {
    val: V;
    next: DLNode<V> = null;
    prev: DLNode<V> = null;

    constructor(val: V) {
        this.val = val;
    }
}

export class DList<V> {
    private head: DLNode<V>;
    private tail: DLNode<V>;
    private count: number = 0;

    constructor() {
        this.head = new DLNode<V>(null as V);
        this.tail = new DLNode<V>(null as V);
        this.head.next = this.tail;
        this.tail.prev = this.head;
    }

    left() {
        if (this.count === 0) return null;

        return this.head.next;
    }

    right() {
        if (this.count === 0) return null;

        return this.tail.prev;
    }

    pushLeft(val: V): DLNode<V> {
        const node = new DLNode(val);
        node.prev = this.head;
        node.next = this.head.next;
        this.head.next.prev = node;
        this.head.next = node;
        this.count++;
        return node;
    }

    pushRight(val: V): DLNode<V> {
        const node = new DLNode(val);
        node.prev = this.tail.prev;
        node.next = this.tail;
        this.tail.prev.next = node;
        this.tail.prev = node;
        this.count++;
        return node;
    }

    popLeft(): DLNode<V> | null {
        if (this.count === 0) return null;

        const node = this.head.next;
        this.head.next = node.next;
        node.next.prev = this.head;
        return node;
    }

    popRight(): DLNode<V> | null {
        if (this.count === 0) return null;

        const node = this.tail.prev;
        this.tail.prev = node.prev;
        node.prev.next = this.tail;
        return node;
    }

    iterator() {
        let cursor = this.head;
        return {
            next() {
                cursor = cursor.next;
                return cursor;
            },
            hasNext() {
                return cursor !== null;
            }
        }
    }

    reverseIterator() {
        let cursor = this.tail;
        return {
            next() {
                cursor = cursor.prev;
                return cursor;
            },
            hasNext() {
                return cursor.prev.prev !== null;
            }
        }
    }

    forEach(fn: (node: DLNode<V>) => void): void {
        let cur = this.head;
        while (cur !== null) {
            fn(cur);
            cur = cur.next;
        }
    }

    size(): number {
        return this.count;
    }
}