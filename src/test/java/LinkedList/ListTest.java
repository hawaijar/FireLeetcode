package LinkedList;

import org.junit.jupiter.api.Test;
import static org.assertj.core.api.Assertions.*;

public class ListTest {
    @Test
    void testing() {
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
    }
}
