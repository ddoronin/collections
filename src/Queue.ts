import { DList } from './DList';

export class Queue<V> {
    private list = new DList();

    enqueue(val: V) {
        this.list.pushLeft(val);
    }

    dequeue() {
        return this.list.popRight();
    }

    size() {
        return this.list.size();
    }
}
