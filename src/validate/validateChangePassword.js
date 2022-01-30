export default function validateChangePassword(values) {
	let errors = {};
    if (!values.password) {
    	errors.password = "Password is required";
    } else if (values.password.length < 6) {
    	errors.password = "Password needs to be more than 5 characters";
    }
    if (!values.new_password) {
		errors.new_password = "New password is required";
    }
    if (!values.confirm_password) {
		errors.confirm_password = "confirm password is required";
	}else if (values.new_password !== values.confirm_password ) {
    errors.password = "New Password and Confirm password does not match";
  }
    return errors;
}