import java.util.Arrays;

public class Main {
    public static void main(String[] args) {
        Solution sol = new Solution();
        int[] nums = {2, 7, 11, 15};
        int target = 9;
        String result =  Arrays.toString(sol.twoSum(nums, target));
        System.out.println(result);
    }
}
