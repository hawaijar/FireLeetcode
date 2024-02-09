package Advanced.Utilities.Jackson;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;

import java.io.File;
import java.io.IOException;
import java.util.List;

public class Demo {
	public static void main(String[] args) throws IOException {
		// Serialization
		List<Employee> employees = List.of(
				new Employee("John", 30, "HR"),
				new Employee("Jane", 25, "IT")
		);
		ObjectMapper mapper = new ObjectMapper();
		String json = mapper.writeValueAsString(employees);
		System.out.println(json);

		// Deserialization
		List<Employee> employees2 = mapper.readValue(new File("src/main/resources/employees.json"),
				mapper.getTypeFactory().constructCollectionType(List.class, Employee.class));
		System.out.println(employees2.get(6));
	}
}
