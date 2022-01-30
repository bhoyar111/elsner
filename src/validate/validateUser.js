export default function validateUser(values) {
	let errors = {};
	if (!values.first_name) {
		errors.first_name = "First name is required";
	}
	if (!values.middle_name) {
		errors.middle_name = "middle name is required";
	}
	if (!values.last_name) {
		errors.last_name = "last name is required";
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
	if (!values.role_id) {
		errors.role_id = "Role is required";
	}
	if(values.eid && !values.password.length){
		return errors;
	}
    if (!values.password) {
    	errors.password = "Password is required";
    } else if (values.password.length < 8) {
    	errors.password = "Password needs to be more than 7 characters";
	}
    return errors;
}