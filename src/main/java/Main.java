import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.ToString;

import java.text.NumberFormat;
import java.util.List;
import java.util.Locale;

@Data
@AllArgsConstructor
@ToString
class Employee {
	private String name;
	private int age;
	private String designation;
	private double salary;
}
public class Main {
    public static void main(String[] args) {
		List<Employee> employees = List.of(
			new Employee("John", 25, "Software Engineer", 50000),
			new Employee("David", 30, "Senior Software Engineer", 75000),
			new Employee("Steve", 28, "Software Engineer", 60000),
			new Employee("Anna", 35, "Software Engineer", 55000),
			new Employee("Mike", 32, "Senior Software Engineer", 80000)
		);

		employees.forEach(System.out::println);

		double amount = 1234.5678;
		NumberFormat nf = NumberFormat.getCurrencyInstance();
		nf.setMaximumFractionDigits(2);
		System.out.println(nf.format(amount));
		nf = NumberFormat.getCurrencyInstance(Locale.JAPAN);
		nf.setMaximumFractionDigits(2);
		System.out.println(nf.format(amount));
		System.out.println(nf.getClass().getName());
    }

}
