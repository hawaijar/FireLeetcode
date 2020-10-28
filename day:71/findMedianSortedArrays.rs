impl Solution {
    pub fn find_median_sorted_arrays(a: Vec<i32>, b: Vec<i32>) -> f64 {
        let nums1: Vec<i32>;
    let nums2: Vec<i32>;
    if a.len() < b.len() {
        nums1 = a;
        nums2 = b;
    }
    else {
        nums1 = b;
        nums2 = a;
    }
    /*
        x = len(nums1), y = len(nums2)
        Px + Py = (x + y)/2
        maxLeft_x = -Infinity if Px == 0 else nums1[Px - 1]
        minRight_x = Infinity if Px == x else nums1[Px]
        maxRight_x = -Infinity if Py == 0 else nums2[Py - 1]
        minRight_x = Infinity if Py == y else nums2[Py]

        if even,
            median = max(maxLeft_x, maxLeft_y) + min(minLeft_x, minRight_x) / 2;
        else,
            median = max(maxLeft_x, maxLeft_y);
     */

    let (x, y) = (nums1.len() as i32, nums2.len() as i32);
    let (mut low, mut high) = (0 as i32, x);

    while low <= high {
        let mut px = ((low + high) as f64 / 2.0).floor() as usize;
        let mut py = (((x + y + 1) as f64 / 2.0).floor() as i32 - px as i32) as usize;

        let max_left_x = if px == 0 { std::i32::MIN} else {nums1[px - 1]};
        let min_right_x = if px == x as usize {std::i32::MAX} else {nums1[px]};
        let max_left_y = if py == 0 {std::i32::MIN} else {nums2[py - 1]};
        let min_right_y = if py == y as usize {std::i32::MAX} else {nums2[py]};

        if max_left_x <= min_right_y && max_left_y <= min_right_x {
            let max_left = if max_left_x > max_left_y {max_left_x} else {max_left_y};
            let min_left = if min_right_x < min_right_y {min_right_x} else {min_right_y};

            return if (x + y) % 2 == 0 {
                ((max_left + min_left) as f64 / 2.0) as f64
            } else {
                max_left as f64
            }
        }
        else if max_left_x > min_right_y {
            high = (px - 1) as i32;
        }
        else {
            low = (px + 1) as i32;
        }
    }
    return 0.0;
    }
}
