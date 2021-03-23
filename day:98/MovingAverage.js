let stream = [];

/**
 * Initialize your data structure here.
 * @param {number} size
 */
var MovingAverage = function(size) {
    this.size = size;
    stream = []
};

function sum(nums) {
    return nums.reduce((acc, el) => acc + el, 0);
}

/** 
 * @param {number} val
 * @return {number}
 */
MovingAverage.prototype.next = function(val) {
    stream.push(val);
    if(stream.length < this.size) {
        return sum(stream)/stream.length;
    }
    else {
        const sizeStream = stream.slice(stream.length - this.size);
        return sum(sizeStream)/this.size;
    }
};

/** 
 * Your MovingAverage object will be instantiated and called as such:
 * var obj = new MovingAverage(size)
 * var param_1 = obj.next(val)
 */
