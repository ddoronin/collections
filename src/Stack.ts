import { List } from './List';

export class Stack<V> {
    private list = new List();

    push(val: V) {
        this.list.pushLeft(val);
    }

    pop(val: V) {
        return this.list.popLeft();
    }

    size() {
        return this.list.size();
    }
}
