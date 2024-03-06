package Advanced.Utilities.Jackson;

import com.fasterxml.jackson.core.*;
import com.fasterxml.jackson.databind.*;
import com.fasterxml.jackson.databind.ser.std.*;
import lombok.*;

import java.io.*;
import java.util.*;

public class EmployeeSerializer extends StdSerializer<Employee> {
    @Setter
    private static Set<String> fieldsToIgnore = new HashSet<>();
    public EmployeeSerializer() {
        this(null);
    }

    public EmployeeSerializer(Class<Employee> t) {
        super(t);
    }

    @Override
    public void serialize(Employee value, JsonGenerator gen, SerializerProvider provider) throws IOException {
        gen.writeStartObject();
        if (!fieldsToIgnore.contains("name")) {
            gen.writeStringField("name", value.getName());
        }
        if (!fieldsToIgnore.contains("age")) {
            gen.writeNumberField("age", value.getAge());
        }
        gen.writeEndObject();
    }

}
