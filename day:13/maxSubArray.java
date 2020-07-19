class Solution {
    public boolean isAllPositive(int[] nums) {
        for(int x: nums) {
            if(x < 0) return false;
        }
        return true;
    }
    public boolean isAllNegative(int[] nums) {
        for(int x: nums) {
            if(x > 0) return false;
        }
        return true;
    }
    public int maxSubArray(int[] nums) {
        // base cases
        if(isAllPositive(nums)) return IntStream.of(nums).sum();
        if(isAllNegative(nums)) return IntStream.of(nums).max().getAsInt();

        int sumSoFar = Integer.MIN_VALUE;
        int sumUpToIndex = 0;
        for(int num: nums) {
            sumUpToIndex += num;
            sumUpToIndex = Math.max(sumUpToIndex, 0);
            sumSoFar = Math.max(sumSoFar, sumUpToIndex);
        }
        return sumSoFar;
        
    }
}
