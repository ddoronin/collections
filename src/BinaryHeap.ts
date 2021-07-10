import { swap } from "./utils";

export class BinaryHeap {
    private harr: number[] = [];

    size() {
        return this.harr.length;
    }

    push(v: number) {
        this.harr.push(v);
        let i = this.harr.length - 1;
        while(i > 0 && this.harr[this.parent(i)] > this.harr[i]) {
            swap(this.harr, i, this.parent(i));
            i = this.parent(i);
        }
    }

    extractMin() {
        if (this.harr.length === 0) throw new Error('Overflow');

        const [head] = this.harr;
        this.harr[0] = this.harr[this.harr.length - 1];
        this.harr.length -= 1;

        this.heapify(0);

        return head;
    }

    private heapify(i: number) {
        const l = this.left(i);
        const r = this.right(i);
        let smallest = i;
        if (l < this.harr.length && this.harr[l] < this.harr[i]) {
            smallest = l;
        }
        if (r < this.harr.length && this.harr[r] < this.harr[smallest]) {
            smallest = r;
        }
        if (smallest !== i) {
            swap(this.harr, smallest, i);
            this.heapify(smallest);
        }
    }

    private parent(i: number) {
        return Math.floor((i - 1) / 2);
    }

    private left(i: number) {
        return 2 * i + 1;
    }

    private right(i: number) {
        return 2 * i + 2;
    }
}