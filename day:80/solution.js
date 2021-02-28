/**
 * @param {number[]} nums
 * @param {number} lower
 * @param {number} upper
 * @return {string[]}
 */
var findMissingRanges = function(nums, lower, upper) {
    // base case for nums=[]
    if(nums.length === 0) {
        if(lower === upper) {
            return [`${lower}`]
        }
        else {
            return [`${lower}->${upper}`]
        }
    }
    const all = [lower, ...nums, upper];
    const result = [];
    
    for(let i = 1; i < all.length; i++) {
        if(i === 1) {
            if(all[1] !== all[0]) {
                if(all[1] - all[0] === 1) {
                    result.push(`${lower}`)
                }
                else {
                    result.push(`${lower}->${all[1] - 1}`)
                }
            }
            continue;
        }
        if(i === all.length - 1) {
           if(all[i] !== all[i-1]) {
              if(all[i] - all[i-1] === 1) {
                result.push(`${upper}`)
              } 
              else {
                 result.push(`${all[i-1] + 1}->${all[i]}`) 
              }
           } 
            continue;
        }
        
        if(all[i] - all[i-1] > 1) {
            if(all[i] - all[i-1] === 2) {
                result.push(`${all[i-1] + 1}`)
            }
            else {
                result.push(`${all[i-1] + 1}->${all[i] - 1}`)
            }
        }
    }
    
    return result;
    
};
