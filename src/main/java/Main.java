import LinkedList.List;

import java.util.Arrays;

public class Main {
    public static void main(String[] args) {
        List list = new List();
        list.add(12);
        list.add(13);
        list.add(14);
        list.add(15);
        System.out.println(Arrays.toString(list.print()));
        list.reverse();
        System.out.println(Arrays.toString(list.print()));
        list.remove(2);
        list.reverse();
        System.out.println(Arrays.toString(list.print()));
    }
}
