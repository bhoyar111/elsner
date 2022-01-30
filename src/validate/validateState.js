export default function validateState(values) {
	let errors = {};
	if (!values.state_name) {
		errors.state_name = "State name is required";
	}
  if (!values.country_id) {
		errors.country_id = "Country name is required";
	}
    return errors;
}
