class Solution {
    val alphabet = arrayOf('A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P',
                 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z')
    
    fun convert(n: Int, result:MutableList<Char>): MutableList<Char> {
        // base case
        if(n < 27) {
            result.add(alphabet[n - 1]);
            return result;
        }
        var x = n;
        if(n % 26 === 0) {
            x = x - 1;
        }
        var quotient = convert((Math.floor(x.toDouble() / 26).toInt()), result); 
        if(n % 26 === 0) {
            var remainder = convert((x % 26) + 1, result);
        }
        else {
            var remainder = convert(x % 26, result);
        }

        return result;
    }

    fun convertToTitle(n: Int): String {
        var result:MutableList<Char> = mutableListOf();
        return convert(n, result).joinToString("")
    }
}
