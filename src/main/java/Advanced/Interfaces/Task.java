package Advanced.Interfaces;

import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;

@Getter
@Setter
@EqualsAndHashCode
public class Task implements Comparable<Task> {
	private int id;
	private String name;
	private LocalDate startDate = LocalDate.now();
	private LocalDate endDate = LocalDate.now();
	private int priority;
	private boolean isCompleted;

	public Task(int id, String name, int priority) {
		this.id = id;
		this.name = name;
		this.priority = priority;
	}

	@Override
	public String toString() {
		return "Task{" +
				"id=" + id +
				", name='" + name + '\'' +
				", startDate=" + startDate +
				", endDate=" + endDate +
				", priority=" + priority +
				", isCompleted=" + isCompleted +
				'}';
	}

	@Override
	public int compareTo(Task o) {
		return name.compareTo(o.name);
	}
}
