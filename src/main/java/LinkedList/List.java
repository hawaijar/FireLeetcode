package LinkedList;

import java.util.ArrayList;

class Node {
    int data;
    Node next;

    public Node(int data) {
        this.data = data;
        this.next = null;
    }
    int getData() {
        return this.data;
    }
    void setData(int data) {
        this.data = data;
    }
    Node getNext() {
        return this.next;
    }
    void setNext(Node node){
        this.next = node;
    }
}

public class List {
    private Node head;
    private Node tail;
    public int size;

    public List(){
        this.head = null;
        this.tail = null;
        this.size = 0;
    }
    void clear() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }
    void setHead(Node node){
        this.head = node;
    }
    Node getHead() {
        return this.head;
    }
    void setTail(Node node){
        this.tail = node;
    }
    Node getTail() {
        return this.tail;
    }

    int getSize() {
        return this.size;
    }
    public void add(int data) {
        Node node = new Node(data);
        if(this.head == null) {
            this.head = node;
            this.tail = node;
            this.size += 1;
            return;
        }
        this.tail.setNext(node);
        this.tail = node;
        this.size += 1;
    }
    public void add(int data, int index) {
        if(index < 0 || index >= this.getSize()) {
            throw new IndexOutOfBoundsException();
        }
        Node node = new Node(data);
        if(index == 0) {
            node.next = this.head;
            this.head = node;
            this.size += 1;
            return;
        }
        Node current = this.head;
        for(int i = 0; i < index - 1; i++) {
            current.setNext(current.getNext());
        }
        node.setNext(current.getNext());
        current.setNext(node);
        this.size += 1;
    }
    // index starts with 0!
    public void remove(int index) {
        if(index < 0 || index >= this.getSize()){
            throw new IndexOutOfBoundsException();
        }
        if(index == 0) {
            this.head = this.head.getNext();
            this.size -= 1;
            return;
        }
        Node current = this.head;
        for(int i = 0; i < index - 1; i++) {
            current = current.getNext();
        }
        Node node = current.getNext();
        current.setNext(node.getNext());
        if(index == this.getSize() - 1) {
            this.tail = current;
        }
        this.size -= 1;
    }

    public int[] print() {
        if(this.head == null) return new int[]{};
        int[] result = new int[this.getSize()];
        Node current = this.head;
        int i = 0;
        while(current != null) {
            result[i++] = current.getData();
            current = current.getNext();
        }
       return result;
    }
    public void reverse() {
        // base case
        if(this.getSize() <= 1) return;
        var temp = this.head;
        this.head = this.tail;
        this.tail = temp;
        Node before = null;
        Node after = null;
        while(after != this.head){
            after = temp.getNext();
            temp.setNext(before);
            before = temp;
            temp = after;
        }
        this.head.setNext(before);
    }
}

