// Using two-pointers method
function threeSum(nums, target = 0) {
    // base case(s)
    if(nums.length < 3) {
        return [];
    }
    let result = [];
    // sort the array first
    nums = nums.sort((a,b) => a - b);
    let j, k;
    for(let i = 0; i < nums.length - 2; i++) {
        if(i === 0 || (i > 0 && nums[i] !== nums[i - 1])) {
            if(nums[i] > 0) {
                return result;
            }
            j = i + 1;
            k = nums.length - 1;
            let a = nums[i]
            while (j < k) {
                let [b, c] = [nums[j], nums[k]]
                let sum = a + b + c;
                if( sum === 0) {
                    result.push([a,b,c]);
                }
                if(sum <= 0) {
                    while(nums[j] === nums[j+1]){
                        j += 1;
                    }
                    j += 1;
                }
                if(sum >= 0) {
                    while(nums[k] === nums[k - 1]) {
                        k -= 1;
                    }
                    k -= 1;
                }
            }
        }
    }
    return result;
}

let result = threeSum([-1,0,1,2,-1,-4])
console.log(result);


// let result = twoSum([1,2,-1,2,-2,3,4,0])
// console.log(result)
