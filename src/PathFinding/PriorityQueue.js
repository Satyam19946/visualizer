// Priority queue implemented using min-heap for A* and other weighted algorithms
// heap contains elements like (data, weight) .
class PriorityQueue {
    constructor(comparator = (a,b) => a > b) {
        this._heap = [];
        this._comparator = comparator;
    }

    heap(){
        return this._heap;
    }

    size(){
        return this._heap.length;
    }

    isEmpty(){
        return this._heap.length === 0;
    }

    peek(){
        if ( this._heap.length >= 1) {
            return (this._heap[0]);
        } else {
            return undefined;
        }
    }

    // O(n) insertion (try doing with tree and maybe reach O(log n))
    push(element){
        var pushed = false;

        for ( var i = 0; i < this._heap.length && !pushed; i++ ){
            if ( this._heap[i][1] > element[1] ){
                this._heap.splice(i, 0, element);
                pushed = true;
            }
        }

        if ( !pushed ){
            this._heap.splice(this._heap.length, 0, element);
        }
    }

    // O(1)
    pop(){
        if ( this._heap.length > 0 ){
            return this._heap.shift();
        } else {
            return undefined;
        }
    }

    empty(){
        this._heap = [];
    }

    forEachNode(callback){
        for ( var i = 0; i < this.size(); i++ ){
            callback(this._heap[i][0]);
        }
    }
};

export default PriorityQueue;