pub fn reverse(x: i32) -> i32 {
    // 123 -> 321
    // 120 -> 21
    // -123 -> -321
    // 0 -> 0

    let mut s: Vec<char> =  x.to_string().chars().collect();
    let mut result:i64 = 0;
    let mut index = 0;
    let sign = if s[0] == '-' {-1} else {1};

    if sign == -1 {
        s = Vec::from(&s[1..]);
    }

    for i in s.iter() {
        result += 10i64.pow(index) * i.to_digit(10).unwrap() as i64;
        if result > std::i32::MAX as i64 {
            return 0;
        }
        index += 1;
    }
    return if sign == -1 {
        result * -1
    } else {
        result
    } as i32;
}
