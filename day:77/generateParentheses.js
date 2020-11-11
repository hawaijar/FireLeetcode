const generateParenthesis = function(n) {
    const output = [];
    function generate(s = '', left = 0, right = 0) {
        if(s.length === 2 * n) {
            output.push(s);
            return;
        }
        if(left < n) {
            generate(s + '(', left + 1, right);
        }
        if(right < left) {
            generate(s + ')' , left, right + 1);
        }
    }
    generate();
    return output;
};

console.log(generateParenthesis(3))
