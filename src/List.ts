export class LNode<V> {
    val: V;
    next: LNode<V> | null = null;

    constructor(val: V) {
        this.val = val;
    }
}

export class List<V> {
    private head: LNode<V> = new LNode<V>(null as V);
    private count: number = 0;

    /**
     * O(1)
     * @param val 
     * @returns 
     */
    pushLeft(val: V): LNode<V> {
        const node = new LNode(val);
        node.next = this.head.next
        this.head.next = node;
        this.count++;
        return node;
    }

    popLeft(): LNode<V> | null {
        const node = this.head.next;
        if (node !== null) {
            this.head = node.next;
            this.count--;
        }
        return node;
    }

    remove(node: LNode<V>): void {
        let cur = this.head.next;
        let prev = null;
        while (cur !== null) {
            if (cur === node) {
                if (prev !== null) prev.next = cur.next;
                else this.head = cur.next;
                this.count--;
                break;
            }
            prev = cur;
            cur = cur.next;
        }
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

    forEach(fn: (node: LNode<V>) => void): void {
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