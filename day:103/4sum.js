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
            j = i + 1;
            k = nums.length - 1;
            let a = nums[i]
            while (j < k) {
                let [b, c] = [nums[j], nums[k]]
                let sum = a + b + c;
                if( sum === target) {
                    result.push([a,b,c]);
                    j += 1;
                    k -= 1;
                }
                else if(sum < target) {
                    while(nums[j] === nums[j+1]){
                        j += 1;
                    }
                    j += 1;
                }
                else {
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

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum_second_approach = function(nums, target) {
    // base case
    if(nums.length < 4) {
        return [];
    }
    // sort the array
    nums.sort((a,b) => a - b);
    const hash = {};// track duplicates
    const result= [];
    for(let i = 0; i < nums.length; i++) {
        const num = nums[i];
            const diff = target - num;
            const array = [...nums.slice(0, i), ...nums.slice(i+1)];
            const threeSums = threeSum(array, diff);
            if(threeSums.length > 0) {
                for(let threeSum of threeSums ) {
                    const a = num;
                    const [b,c,d] = [...threeSum];
                    const temp = [a,b,c,d].sort((a,b) => a - b);
                    if(!hash[JSON.stringify(temp)]) {
                       result.push(temp);
                       hash[JSON.stringify(temp)] = true;
                    }
                    // result.push([num, ...threeSum].sort((a,b) => a - b))
                }
            }
    }
    return result;
    
};

var fourSum = function(nums, target) {
    // base case(s)
	if(nums.length < 4) {
		return [];
	}
	let result = [];
	// sort the array first
	nums = nums.sort((a,b) => a - b);
	let j, k;
	let cache = {};
	for(let i = 0; i < nums.length - 3; i++) {
		if(i === 0 || (i > 0 && nums[i] !== nums[i - 1])) {
			for(let j = i + 1; j < nums.length - 2; j++) {
				x = j + 1;
				y = nums.length - 1;
				let a = nums[i]
				let b = nums[j]
				while (x < y) {
					let [c, d] = [nums[x], nums[y]]
					let sum = a + b + c + d;
					if( sum === target) {
						const key = JSON.stringify([a,b,c, d]);
						if(!cache[key]) {
							result.push([a,b,c, d]);
							cache[key] = true;
						}
						x += 1;
						y -= 1;
					}
					else if(sum < target) {
						while(nums[x] === nums[x+1]){
							x += 1;
						}
						x += 1;
					}
					else {
						while(nums[y] === nums[y - 1]) {
							y -= 1;
						}
						y -= 1;
					}
				}
			}
		}
	}
	return result;
}
