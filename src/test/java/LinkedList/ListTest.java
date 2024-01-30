package LinkedList;

import org.junit.jupiter.api.Test;

import java.util.Arrays;
import java.util.Objects;

import static org.assertj.core.api.Assertions.*;

public class ListTest {
    @Test
    void testingList() {
        var list = new List();
        list.add(12);
        list.add(13);
        list.add(14);
        list.add(15);
        assertThat(list.print()).hasSameSizeAs(new int[]{12,13,14,15});
        assertThat(list.print()).contains(15,12,13,14);
        assertThat(list.print()).containsExactly(12,13,14,15);
        list.remove(2);
        assertThat(list.print()).containsExactly(12,13,15);
        list.remove(0);
        assertThat(list.print()).containsExactly(13,15);
        list.reverse();
        assertThat(list.print()).containsExactly(15,13);
    }
    @Test
    void testingListUtility() {
        var list = new List();
        list.add(12);
        list.add(13);
        list.add(14);
        list.add(15);
        assertThat(Objects.requireNonNull(ListUtility.findMiddleNode(list)).getData()).isEqualTo(14);

        list.remove(2);
        assertThat(Objects.requireNonNull(ListUtility.findMiddleNode(list)).getData()).isEqualTo(13);
    }
    @Test
    void testingListUtility2() {
        var list = new List();
        list.add(12);
        list.add(13);
        list.add(14);
        list.add(15);
        assertThat(Objects.requireNonNull(ListUtility.findKthFromEnd(list, 2)).getData()).isEqualTo(14);
    }
    @Test
    void testingRemoveDuplicates() {
        var list = new List();
        list.add(1);
        list.add(1);
        list.add(2);
        list.add(3);
        ListUtility.removeDuplicates(list);
        assertThat(list.print()).containsExactly(1,2,3);
        list.clear();
        list = new List();
        list.add(1);
        list.add(2);
        list.add(3);
        list.add(1);
        list.add(4);
        list.add(2);
        list.add(5);
        ListUtility.removeDuplicates(list);
        assertThat(list.print()).containsExactly(1,2,3,4,5);

        list.clear();
        list = new List();
        list.add(1);
        list.add(1);
        list.add(1);
        ListUtility.removeDuplicates(list);
        assertThat(list.print()).containsExactly(1);
    }
    @Test
    void testingBinaryToDecimal() {
        var list = new List();
        list.add(1);
        list.add(1);
        list.add(0);
        list.add(1);
        assertThat(list.binaryToDecimal()).isEqualTo(13);
        list.clear();
        list.add(1);
        list.add(1);
        list.add(1);
        assertThat(list.binaryToDecimal()).isEqualTo(7);

    }
}
