package Advanced.Interfaces.defaults;

public class DefaultMethodsDemo {
	public static void main(String[] args) {
		CompanyEmployee employee = new CompanyEmployee("John", "Doe");
		System.out.println(employee.getName());
		employee.doWork();
	}
}
