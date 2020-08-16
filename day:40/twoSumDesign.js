/**
 * Initialize your data structure here.
 */
var TwoSum = function() {
    this.hash = {}
};

/**
 * Add the number to an internal data structure.. 
 * @param {number} number
 * @return {void}
 */
TwoSum.prototype.add = function(number) {
    if(this.hash[number]) {
        this.hash[number] = this.hash[number] + 1;
    }
    else {
        this.hash[number] = 1;
    }
};

/**
 * Find if there exists any pair of numbers which sum is equal to the value. 
 * @param {number} value
 * @return {boolean}
 */
TwoSum.prototype.find = function(value) {
    for(const key of Object.keys(this.hash)) {
        const intKey = parseInt(key);
        const diff = value - intKey;
        if(intKey === diff) {
            if(this.hash[key] > 1) {
                return true;
            }
        }
        else {
            if(this.hash[(diff).toString()]) {
                return true;
            }
        }
    }
    return false;
};

/** 
 * Your TwoSum object will be instantiated and called as such:
 * var obj = new TwoSum()
 * obj.add(number)
 * var param_2 = obj.find(value)
 */
