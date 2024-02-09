package Advanced.Utilities.Jackson;
import com.fasterxml.jackson.databind.ObjectMapper;

import java.io.File;
import java.io.IOException;

public class Demo {
	public static void seriaDeserialnestTedObjects() {
		Car car = new Car("Ford");
		Engine engine = new Engine("V8", 500);
		car.setEngine(engine);
		ObjectMapper objectMapper = new ObjectMapper();
		try {
			// Serialize Java object to JSON file
			objectMapper.writeValue(new File("src/main/resources/car.json"), car);
			// Serialize Java object to JSON string
			// Deserialize JSON file to Java object
			Car carFromFile = objectMapper.readValue(new File("src/main/resources/car2.json"), Car.class);
			System.out.println(carFromFile);
		} catch (IOException e) {
			e.printStackTrace();
		}
	}
	public static void main(String[] args) {
		seriaDeserialnestTedObjects();
	}
}
