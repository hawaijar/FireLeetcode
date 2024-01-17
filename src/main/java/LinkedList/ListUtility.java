package LinkedList;

public class ListUtility {
    public static Node findMiddleNode(List list) {
        if(list.getSize() == 0) return null;
        Node slow = list.getHead();
        Node fast = list.getHead();
        while(fast != null && fast.getNext() != null) {
            slow = slow.getNext();
            fast = fast.getNext().getNext();
        }
        return slow;
    }
    public boolean hasLoop(List list) {
        if(list.getSize() == 0) return false;
        Node slow = list.getHead();
        Node fast = list.getHead();
        while(fast != null && fast.getNext() != null) {
            slow = slow.getNext();
            fast = fast.getNext().getNext();
            if(slow == fast) return true;
        }
        return false;
    }
    public static Node findKthFromEnd(List list, int k) {
        if(list.getHead() == null) return null;
        Node slow = list.getHead();
        Node fast = list.getHead();
        for(int i = 0; i < k; i++) {
            if(fast == null) return null;
            fast = fast.getNext();
        }

        while(fast != null) {
            slow = slow.getNext();
            fast = fast.getNext();
        }
        return slow;
    }
    public static void partitionList(List list, int x) {
        // base case
        if(list.getHead() == null) return;

        Node lessList = new Node(0);
        Node greaterList = new Node(0);
        Node head = list.getHead();

        Node currentLess = lessList;
        Node currentGreater = greaterList;

        while(head != null) {
            if(head.data < x) {
                currentLess.next = head;
                currentLess = currentLess.next;
            } else {
                currentGreater.next = head;
                currentGreater = currentGreater.next;
            }
            head = head.next;
        }
        currentGreater.next = null;
        currentLess.next = greaterList.next;

        head = lessList.next;
    }
}
