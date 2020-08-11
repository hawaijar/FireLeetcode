class MinStack() {

    /** initialize your data structure here. */
    val stack:MutableList<Int> = mutableListOf<Int>();
    val minstack:MutableList<Int> = mutableListOf<Int>();
    
    fun push(x: Int) {
        stack.add(x);
        if(minstack.size == 0) {
            minstack.add(x);
        }
        else if(x <= this.getMin()) {
            minstack.add(x);
        }
    }

    fun pop() {
        val count = stack.count();
        val x = stack.get(count - 1);
        if(x == getMin()) {
            minstack.removeAt(minstack.count() - 1);
        }
        stack.removeAt(stack.count() - 1)
    }

    fun top(): Int {
        val count = stack.count();
        return stack.get(count - 1)
    }

    fun getMin(): Int {
        val count = minstack.count();
        return minstack.get(count - 1)
    }

}

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
