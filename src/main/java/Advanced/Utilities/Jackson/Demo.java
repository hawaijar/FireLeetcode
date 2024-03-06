package Advanced.Utilities.Jackson;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.module.*;
import com.fasterxml.jackson.databind.ser.*;
import com.fasterxml.jackson.databind.ser.impl.*;

import java.io.*;
import java.util.*;

public class Demo {
    public static void mapDynamicJson() throws IOException {
        String json = """
                {
                	"name": "John",
                	"age": 30,
                	"department": "HR",
                	"address": {
                		"city": "New York",
                		"zip": "10021"
                	},
                	"skills": ["Java", "Python", "C++"],
                	"alias": "Johnny",
                	"score": 9.5,
                	"height": 5.8
                }
                				
                """;

        ObjectMapper objectMapper = new ObjectMapper();
        try {
            // Deserialize JSON string to Java object
            Employee employee = objectMapper.readValue(json, Employee.class);
            Employee employee1 = new Employee();
            employee1.setName("John");
            employee1.setAge(30);
            employee1.setDept("HR");
            List<Employee> employees = List.of(employee, employee1);
            String jsonString = objectMapper.writeValueAsString(employees);
            System.out.println(jsonString);
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

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

    public static void main(String[] args) throws IOException {
//		seriaDeserialnestTedObjects();
        mapDynamicJson();
    }
}
