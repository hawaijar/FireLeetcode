package Advanced.Multithreading.ForkJoinPool;

import java.util.*;
import java.util.concurrent.*;
import java.util.stream.*;

public class PickFruitsWithRecursiveTask {
    public static void main(String[] args) {
        List<AppleTree> appleTrees = AppleTree.createGarden(6);
        ForkJoinPool pool = ForkJoinPool.commonPool();

        PickFruitsTask task = new PickFruitsTask(appleTrees.toArray(new AppleTree[0]), 0, appleTrees.size() - 1);
        Integer result = pool.invoke(task);
        System.out.println("All apples picked: " + result);
    }
    public static class PickFruitsTask extends RecursiveTask<Integer> {
        private final AppleTree[] appleTrees;
        private final int fromIndex;
        private final int toIndex;

        public PickFruitsTask(AppleTree[] appleTrees, int fromIndex, int toIndex) {
            this.appleTrees = appleTrees;
            this.fromIndex = fromIndex;
            this.toIndex = toIndex;
        }

        @Override
        protected Integer compute() {
            // base case
            if (toIndex - fromIndex <= 3) {
                return doCompute();
            }
            int middle = fromIndex + (toIndex - fromIndex) / 2;
            PickFruitsTask leftTask = new PickFruitsTask(appleTrees, fromIndex, middle);
            PickFruitsTask rightTask = new PickFruitsTask(appleTrees, middle + 1 , toIndex);

            rightTask.fork();
            return leftTask.compute() + rightTask.join();
        }

        Integer doCompute() {
            return IntStream.rangeClosed(fromIndex, toIndex)
                    .map(i -> appleTrees[i].pickApples("Worker"))
                    .sum();
        }
    }
}
