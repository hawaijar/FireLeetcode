#### Given a list of coin changes, find the _minimum_ change that cannot be constructable from the given changes.

### Example:
If the list = [1, 2, 3] then the answer is 7
If the list  [1, 2, 4] then the answer is also 7

However, if the list is [1, 2, 5] then the answer is 4!

Imagine you're given a thousand coin changes, **How will you solve the problem in optimal time?**

### Solution:

The optimal solution is more of a mathematical correlation between the values of each consecutive change.

Let's look at the above two examples -

Why [1, 2, 4] yields the solution '7' and [1, 2, 5] yields '4'?

The only difference between the two list is the value at index 2 (if we assume 0 indexing).

In the first list, the value list1[2] = 4 and in the second list, list2[2] = 5.

#### That is the clue of the solution!

Here is the approach -

- Create a variable called _maxConstructable_ and assign as 0. Because for an empty list (of coins) the minimum change is '1'.

- If the list is empty, return _maxConstructable_ + 1 as the solution
- Sort the given array. If the first element is not 1, return '1' as the solution

### Solution is _maxConstructable_ + 1
- And this is true when the list is empty because in this case the answer is 1 because _maxConstructable_ was initialized with 0 and (0 + 1) = 1
- How about list = [1]? In this case we know the answer is 2 but how does _maxConstructable_ + 1 == 2 when _maxConstructable_ was 0?


In order to answer this, we need to know how we update the _maxConstructable_. The way we update the _maxConstructable_ is that for each iteration, we check the below condition -

if (_maxConstructable_ + 1) is greater/equal to element (at the given index), then we update _maxConstructable_ = _maxConstructable_ + element

Else, return _maxConstructable_ + 1 as the answer.

Let's check the above rules -

For list = [1, 2, 5]

_maxConstructable_ = 0 initially

**First iteration:** element = 1

_maxConstructable_ + 1 == 1 which is greater/equal to element(1) and we update _maxConstructable_ = _maxConstructable_ + element = 1

So, _maxConstructable_ = 1

**Second iteration:** element 2
_maxConstructable_ + 1 == 2 which is greater/equal to element(2) and we update _maxConstructable_ = _maxConstructable_ + element(2) = 3

So, _maxConstructable_ = 3

**Third iteration:** element 5
_maxConstructable_ + 1 == 4 which is less than element(5) and we return _maxConstructable_ + 1 = 4 as the answer which is true.
