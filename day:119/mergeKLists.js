/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
    // base case
	if(lists.length === 0) {
		return null;
	}
	let pointers = [];
	for (let i = 0; i < lists.length; i++) {
		pointers[i] = lists[i];
	}
	let head = null;
	let tail = null;
	let smallest;
	let smallestIndex = 0;
	while (pointers.some((list) => list !== null)) {
		smallest = Infinity;
		for (let i = 0; i < lists.length; i++) {
			if (pointers[i] !== null) {
				if (pointers[i].val < smallest) {
					smallest = pointers[i].val;
					smallestIndex = i;
				}
			}
		}
		if (head === null) {
			head = new ListNode(smallest);
			tail = head;
		} else {
			let newNode = new ListNode(smallest);
			tail.next = newNode;
			tail = newNode;
		}
		pointers[smallestIndex] = pointers[smallestIndex].next;
	}
	return head;
};
