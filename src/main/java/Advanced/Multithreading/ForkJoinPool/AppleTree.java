package Advanced.Multithreading.ForkJoinPool;

import lombok.extern.java.*;

import java.util.*;
import java.util.concurrent.*;

@Log
public class AppleTree {
    private final String label;
    private final int numberOfApples;

    public static List<AppleTree> createGarden(int numberOfAppleTrees) {
        List<AppleTree> appleTrees = new ArrayList<>();
        for(int i = 0; i < numberOfAppleTrees; i++) {
            AppleTree appleTree = new AppleTree("AppleTree" + i, 3);
            appleTrees.add(appleTree);
        }
        return appleTrees;
    }

    public AppleTree(String label, int numberOfApples) {
        this.label = label;
        this.numberOfApples = numberOfApples;

    }
    public int pickApples(String workerName) {
        System.out.println(workerName + " picked " + numberOfApples + " apples from " + label);
        try {
            TimeUnit.SECONDS.sleep(1);
        } catch (InterruptedException e) {
            log.info("Interrupted");
            Thread.currentThread().interrupt();
        }
        return numberOfApples;
    }
}
