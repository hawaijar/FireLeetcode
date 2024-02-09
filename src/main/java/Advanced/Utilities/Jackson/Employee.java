package Advanced.Utilities.Jackson;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor

public class Employee {
	private String name;
	private int age;
	@JsonProperty("department")
	private String dept;
}
