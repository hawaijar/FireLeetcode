package Advanced.Utilities.Jackson;

import lombok.*;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class Car {
    private String model;
    Engine engine;
    public Car(String model) {
        this.model = model;
    }
}

@Data
@AllArgsConstructor
@NoArgsConstructor
class Engine {
    private String type;
    private int power;
}
