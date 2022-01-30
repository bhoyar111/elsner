export default function validateCity(values) {
	let errors = {};
	if (!values.city_name) {
		errors.city_name = "City name is required";
	}
  if (!values.state_id) {
		errors.state_id = "State name is required";
	}
  if (!values.country_id) {
		errors.country_id = "Country name is required";
	}
    return errors;
}
