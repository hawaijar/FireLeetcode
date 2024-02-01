package Advanced.Interfaces.defaults;

public interface Employee {
	String getFirstName();
	String getLastName();
	void doWork();

	default String getName() {
		return String.format("%s %s", getFirstName(), getLastName());
	}
}
