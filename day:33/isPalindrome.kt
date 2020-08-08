class Solution {
    fun isPalindrome(s: String): Boolean {
        //base case (test for empty strings)
        if(Regex(pattern="""\w+""").find(s)?.value == null) return true;
        
        // convert all chars to lowercase
        val sLowerCase = s.toLowerCase()
        
        // remove all non-aphanumeric characters
        val matchedResults = Regex(pattern = """[A-Za-z0-9]+""").findAll(input = sLowerCase)
	    val r = StringBuilder()
	    for (matchedText in matchedResults) {
    	    r.append(matchedText.value + " ")
	    }
        var result = Regex("""\s+""").replace(r.toString(),"")
        
        var i = 0
        var j = result.length - 1
    
        while(i < j) {
            if(result[i] == result[j]) {
                i += 1;
                j -= 1;
                continue;
            }
            else {
                return false;
            }
        }
        return true;
    }
}
