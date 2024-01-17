package LinkedList;

import org.junit.jupiter.api.Test;

import static org.assertj.core.api.Assertions.*;

class ListUtilityTest {

    @Test
    void partitionList() {
        var list = new List();
        list.add(3);
        list.add(8);
        list.add(5);
        list.add(10);
        list.add(2);
        list.add(1);

        ListUtility.partitionList(list, 5);
        assertThat(list.print()).containsExactly(new int[]{3,2,1,8,5,10});

        // check base cases

        // all elements less than the target
        list.clear();
        list.add(3);
        list.add(2);
        list.add(1);
        list.add(4);
        ListUtility.partitionList(list, 5);
        assertThat(list.print()).containsExactly(new int[]{3,2,1,4});

        // all elements greater than the target
        list.clear();
        list.add(13);
        list.add(12);
        list.add(11);
        list.add(14);
        ListUtility.partitionList(list, 5);
        assertThat(list.print()).containsExactly(new int[]{13,12,11,14});
    }
}