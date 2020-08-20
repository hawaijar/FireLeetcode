class Solution {
    // you need treat n as an unsigned value
    fun reverseBits(n:Int):Int {
        var result = 0;
        var power = 31;
        var m = n;
        while(m != 0){
            result += (m and 1) shl power;
            m = m shr 1;
            power -= 1;
        }
        return result;
    }
}
