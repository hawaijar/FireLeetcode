package Advanced.Multithreading.ForkJoinPool;

import java.util.*;
import java.util.concurrent.*;

public class PickFruits {
    public static void main(String[] args) {
        // Create a list of apple trees
        List<AppleTree> appleTrees = AppleTree.createGarden(6);

        Callable<Void> worker1 = createWorker(appleTrees.toArray(new AppleTree[0]), 0, 2, "Worker1");
        Callable<Void> worker2 = createWorker(appleTrees.toArray(new AppleTree[0]), 2, 4, "Worker2");
        Callable<Void> worker3 = createWorker(appleTrees.toArray(new AppleTree[0]), 4, 6, "Worker3");

        ForkJoinPool.commonPool().invokeAll(List.of(worker1, worker2, worker3));

        System.out.println("All apples picked");

    }
    public static Callable<Void> createWorker(AppleTree[] appleTrees,int fromIndex, int toIndex, String workerName) {
        return () -> {
            for(int i = fromIndex; i < toIndex; i++) {
                appleTrees[i].pickApples(workerName);
            }

            return null;
        };
    }
}
