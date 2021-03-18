/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        // base case
        if(n === 1) return Number(isBadVersion(1));
        let middle;
        let [left, right] = [1, n];
        
        while(left < right) {
            
            if(left + 1 === right) {
                if(isBadVersion(left)) {
                    return left;
                }
                else {
                    return right;
                }
            }
            else {
                let middle = Math.floor((left + right)/2);
                if(isBadVersion(middle)) {
                    right = middle;
                }
                else {
                    left = middle;
                }
            }
        }
        return left;
    };
};
