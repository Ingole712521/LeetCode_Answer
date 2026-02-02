class MyHeap {
    private data: number[] = [];
    private cmp: (a: number, b: number) => boolean;

    constructor(cmp: (a: number, b: number) => boolean) {
        this.cmp = cmp;
    }

    size(): number {
        return this.data.length;
    }

    peek(): number {
        return this.data[0];
    }

    push(x: number): void {
        this.data.push(x);
        this.up(this.data.length - 1);
    }

    pop(): number {
        const top = this.data[0];
        const last = this.data.pop()!;
        if (this.data.length) {
            this.data[0] = last;
            this.down(0);
        }
        return top;
    }

    private up(i: number) {
        while (i > 0) {
            const p = (i - 1) >> 1;
            if (this.cmp(this.data[p], this.data[i])) break;
            [this.data[p], this.data[i]] = [this.data[i], this.data[p]];
            i = p;
        }
    }

    private down(i: number) {
        const n = this.data.length;
        while (true) {
            let best = i;
            const l = i * 2 + 1;
            const r = i * 2 + 2;
            if (l < n && !this.cmp(this.data[best], this.data[l])) best = l;
            if (r < n && !this.cmp(this.data[best], this.data[r])) best = r;
            if (best === i) break;
            [this.data[i], this.data[best]] = [this.data[best], this.data[i]];
            i = best;
        }
    }
}

function minimumCost(nums: number[], k: number, dist: number): number {
    k--; 

    const small = new MyHeap((a, b) => a > b); 
    const large = new MyHeap((a, b) => a < b); 

    const delayed = new Map<number, number>();
    let sum = 0;
    let smallSize = 0;

    const prune = (heap: MyHeap) => {
        while (heap.size()) {
            const x = heap.peek();
            if ((delayed.get(x) ?? 0) > 0) {
                delayed.set(x, delayed.get(x)! - 1);
                heap.pop();
            } else break;
        }
    };

    const rebalance = () => {
        prune(small);
        prune(large);
        while (smallSize > k) {
            const x = small.pop();
            sum -= x;
            smallSize--;
            large.push(x);
        }
        while (smallSize < k) {
            prune(large);
            const x = large.pop();
            sum += x;
            smallSize++;
            small.push(x);
        }
    };

    for (let i = 1; i <= dist + 1; i++) {
        small.push(nums[i]);
        sum += nums[i];
        smallSize++;
    }

    rebalance();
    let ans = nums[0] + sum;

    for (let i = dist + 2; i < nums.length; i++) {
        const out = nums[i - dist - 1];
        delayed.set(out, (delayed.get(out) ?? 0) + 1);
        if (smallSize && out <= small.peek()) {
            sum -= out;
            smallSize--;
        }

        const x = nums[i];
        if (smallSize && x <= small.peek()) {
            small.push(x);
            sum += x;
            smallSize++;
        } else {
            large.push(x);
        }

        rebalance();
        ans = Math.min(ans, nums[0] + sum);
    }

    return ans;
}
