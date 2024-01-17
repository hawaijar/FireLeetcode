import LinkedList.List;
import LinkedList.ListUtility;

import java.util.Arrays;

public class Main {
    public static void main(String[] args) {
        List list = new List();
        list.add(3);
        list.add(8);
        list.add(5);
        list.add(10);
        list.add(2);
        list.add(1);

    ListUtility.partitionList(list, 5);
    }
}
