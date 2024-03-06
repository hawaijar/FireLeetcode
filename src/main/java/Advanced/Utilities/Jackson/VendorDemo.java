package Advanced.Utilities.Jackson;

import com.fasterxml.jackson.databind.*;

import java.io.*;
import java.util.*;

public class VendorDemo {
    public static void main(String[] args) throws IOException {
        ObjectMapper objectMapper = new ObjectMapper();
        Changelog changeLog = objectMapper.readValue(new File("src/main/resources/data.json"), Changelog.class);
        Changes changes = changeLog.getChanges();
        List<PartnerService> services = changes.getServices();
        for (PartnerService service : services) {
            System.out.println(service);
        }
        List<PartnerServiceLocation> locations = changes.getLocations();
        for (PartnerServiceLocation location : locations) {
            System.out.println(location);
        }
    }
}
