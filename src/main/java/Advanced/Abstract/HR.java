package Advanced.Abstract;

import java.text.NumberFormat;
import java.util.ArrayList;
import java.util.List;

public class HR {
	private final List<Employee> employees = new ArrayList<>();

	public void hire(Employee employee) {
		employees.add(employee);
	}

	public List<Employee> getEmployees() {
		return employees;
	}

	public void printEverybody() {
		for (Employee employee : employees) {
			System.out.println(employee);
		}
	}

	public void payEverybody() {
		for (Employee employee : employees) {
			NumberFormat nf = NumberFormat.getCurrencyInstance();
			nf.setMaximumFractionDigits(2);
			System.out.printf("%s was paid %s%n", employee.getName(), nf.format(employee.getPay()));
		}
	}


	public static void main(String[] args) {
		HR hr = new HR();
		hr.hire(new Salaried("John", 50000));
		hr.hire(new Salaried("Sally", 60000));
		hr.hire(new Hourly("Bob", 80, 50));
		hr.printEverybody();
		hr.payEverybody();
	}
}
