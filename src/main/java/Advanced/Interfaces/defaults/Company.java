package Advanced.Interfaces.defaults;

public interface Company {
	default String getName() {
		return "My Company";
	}
}
