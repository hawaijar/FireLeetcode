package Advanced.Utilities.Jackson;

import com.fasterxml.jackson.annotation.*;
import lombok.*;

import java.util.*;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class Changelog {
    @JsonProperty("id")
    private String id;
    private Changes changes;
}

@Data
@AllArgsConstructor
@NoArgsConstructor
@JsonIgnoreProperties(value = {
        "tags","location_ancestors","managed_locations","api_integration_enabled",
        "api_integration_config","partner_code","contact_name","email","postal_code",
        "phone_no","phonecode","alternate_phone_code","alternate_phone_no","contact_fax_code",
        "contact_fax_no","gps_enabled","partner_category","partner_category_id","partner_type",
        "partner_type_id","status","partner_logo","deleted_at","created_at","updated_at",
        "location_id","location_type","business_address1","business_address2","business_address3"
})
class Changes {
    @JsonProperty("partner_services")
    private List<PartnerService> services;
    @JsonProperty("partner_service_locations")
    private List<PartnerServiceLocation> locations;
    private String name;
    @JsonProperty("id")
    private String vendorId;
    @JsonProperty("organisation_id")
    private String organizationId;
}
@Data
@AllArgsConstructor
@NoArgsConstructor
class PartnerService {
    String id;
    String name;
    String description;
    String code;
    String status;
    @JsonProperty("min_weight")
    Double minWeight;
    @JsonProperty("max_weight")
    Double maxWeight;
    Double cost;
    @JsonProperty("lead_time_in_hrs")
    Double leadTime;

}

@Data
@AllArgsConstructor
@NoArgsConstructor
@JsonIgnoreProperties(value = {
    "id","type","location_id","ancestor_ids"
})
class PartnerServiceLocation {
    @JsonProperty("location_name")
    String locationName;
    @JsonProperty("location_type_name")
    String locationType;
    @JsonProperty("ancestor_names")
    String[] ancestors;
}

