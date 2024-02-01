package Advanced.Interfaces;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.List;

public class TaskSorter {
	public static void main(String[] args) {
		List<Task> tasks = new ArrayList<>();
		tasks.add(new Task(1, "Eat and Play", 1));
		tasks.add(new Task(2, "Exercise", 2));
		tasks.add(new Task(3, "Ball Throwing", 3));
		tasks.add(new Task(4, "Reading", 4));
		tasks.add(new Task(5, "Amusement Park", 5));
        tasks.forEach(System.out::println);
		System.out.println("Sorting by name");
		Collections.sort(tasks);
		tasks.forEach(System.out::println);
	}
}
