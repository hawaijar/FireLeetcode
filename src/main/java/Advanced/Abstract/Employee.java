package Advanced.Abstract;

import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;

@Getter
@Setter
public abstract class Employee {
	public static final String DEFAULT_NAME = "Unknown";
	private static int nextId;
	private String name;
	private LocalDate hireDate;
	public Employee() {
		this(DEFAULT_NAME);
	}
	public Employee(String name) {
		this.name = name;
		this.hireDate = LocalDate.now();
	}
	public abstract double getPay();
}
