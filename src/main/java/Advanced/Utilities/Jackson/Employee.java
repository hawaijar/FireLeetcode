package Advanced.Utilities.Jackson;

import com.fasterxml.jackson.annotation.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.*;

@Data
@AllArgsConstructor
@NoArgsConstructor

@JsonIgnoreProperties(value = {"alias", "height"})
public class Employee {
	private String name;
	private int age;
	@JsonProperty("department")
	private String dept;
	Map<String, Object> info = new HashMap<>();

	@JsonAnySetter
	public void setInfo(String key, Object value) {
		info.put(key, value);
	}
}
