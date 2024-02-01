package Advanced.Interfaces.defaults;

public class CompanyEmployee implements Company, Employee{
	private String firstName;
	private String lastName;

	public CompanyEmployee(String firstName, String lastName) {
		this.firstName = firstName;
		this.lastName = lastName;
	}

	@Override
	public String getFirstName() {
		return firstName;
	}

	@Override
	public String getLastName() {
		return lastName;
	}

	@Override
	public void doWork() {
		System.out.println("Working...");
	}

	@Override
	public String getName() {
		return String.format("%s works for %s", Employee.super.getName(), Company.super.getName());
	}
}
