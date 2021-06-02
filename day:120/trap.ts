function trap(height: number[]): number {
    // base case
    if(height.length < 3) return 0;
    
    // idea: Water accumalated at level(i) will be:
    // Amount(i) = Minimum(MaxLeft(i), MaxRight(i)) - level(i)
    
    // find the maxLefts
    let maxLefts: number[] = height.slice();
    for(let i = 1; i < height.length; i++) {
        maxLefts[i] = Math.max(maxLefts[i - 1], height[i]);
    }
    // find the maxRights
    let maxRights: number[] = height.slice();
    for(let i = height.length - 2; i >= 0; i--) {
        maxRights[i] = Math.max(maxRights[i + 1], height[i]);
    }
    
    return height.reduce((acc, level, index) => {
        acc += Math.min(maxLefts[index], maxRights[index]) - level;
        return acc;
    }, 0)
};
