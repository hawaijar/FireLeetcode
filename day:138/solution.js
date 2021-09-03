class ListNode {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}
function createListFromArray(array) {
  let head = new ListNode(array[0]);
  let current = head;

  let count = 1;

  while (count < array.length) {
    let node = new ListNode(array[count]);
    current.next = node;
    current = node;
    count += 1;
  }
  return head;
}
function printList(head) {
  let current = head;
  while (current) {
    console.log(current.val);
    current = current.next;
  }
}

function mergeLinkedLists(headOne, headTwo) {
  // base case
  if (!headOne && !headTwo) return null;
  if (!headOne) return headTwo;
  if (!headTwo) return headOne;

  // head & tail of the merged list
  let [head, tail] = [null, null];
  if (headOne.val < headTwo.val) {
    head = headOne;
    tail = headOne;
    headOne = headOne.next;
    tail.next = null;
  } else {
    head = headTwo;
    tail = headTwo;
    headTwo = headTwo.next;
    tail.next = null;
  }
  while (headOne && headTwo) {
    if (headOne.val < headTwo.val) {
      tail.next = headOne;
      tail = headOne;
      headOne = headOne.next;
      tail.next = null;
    } else {
      tail.next = headTwo;
      tail = headTwo;
      headTwo = headTwo.next;
      tail.next = null;
    }
  }
  if (!headOne) {
    tail.next = headTwo;
  }
  if (!headTwo) {
    tail.next = headOne;
  }
  return head;
}

const l1 = createListFromArray([2, 6, 7, 8]);
const l2 = createListFromArray([1, 3, 4, 5, 9, 10]);
const l3 = mergeLinkedLists(l1, l2);
printList(l3);
