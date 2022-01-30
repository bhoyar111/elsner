export default function validateFarmer(values) {
	let errors = {};
	if (!values.full_name) {
		errors.full_name = "Full name is required";
	}
  if (!values.age) {
		errors.age = "Age is required";
	}
  if (!values.email_id) {
		errors.email_id = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(values.email_id)) {
    	errors.email_id = "Email address is invalid";
	}
	if (!values.mobile_no) {
		errors.mobile_no = "mobile is required";
	}
	else if (values.mobile_no.length <10) {
    	errors.mobile_no = "mobile no. need to be 10 numbers or more than 10";
	}
  if (!values.otp) {
		errors.otp = "OTP is required";
	}
  if (!values.address) {
		errors.address = "Adress is required";
	}
  if (!values.state_id) {
		errors.state_id = "State is required";
	}
  if (!values.district_id) {
		errors.district_id = "City is required";
	}
  if (!values.taluka) {
		errors.taluka = "Taluka is required";
	}
  if (!values.pin_code) {
		errors.pin_code = "Pin Code is required";
	}
  if (!values.irrigate) {
		errors.irrigate = "Irrigate is required";
	}
  if (!values.acreage) {
		errors.acreage = "Acreage is required";
	}
  if (!values.krushi_kendra_name) {
		errors.krushi_kendra_name = "Krushi Kendra name is required";
	}
    return errors;
}
