export default function validateDealer(values) {
    let errors = {};
    if (!values.dealer_name) {
        errors.dealer_name = "Dealer Name is required";
    }
    if (!values.email_id) {
        errors.email_id = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(values.email_id)) {
        errors.email_id = "Email address is invalid";
    }
    if (!values.mobile_no) {
        errors.mobile_no = "Mobile No. is required";
    }
    if (!values.dealer_address) {
        errors.dealer_address = "Dealer Address is required";
    }
    if (!values.country_id) {
        errors.country_id = "Dealer country is required";
    }
    if (!values.state_id) {
        errors.state_id = "Dealer State is required";
    }
    if (!values.district_id) {
        errors.district_id = " Dealer city is required";
    }
    if (!values.taluka) {
        errors.taluka = " Dealer Taluka is required";
    }
    if (!values.pin_code) {
        errors.pin_code = " Dealer Pin Code is required";
    }
    if (!values.latitude) {
        errors.latitude = " Dealer latitude is required";
    }
    if (!values.longitude) {
        errors.longitude = " Dealer longitude is required";
    }
    return errors;
}
