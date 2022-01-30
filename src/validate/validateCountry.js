export default function validateCountry(values) {
	let errors = {};
	if (!values.country_name) {
		errors.country_name = "Country name is required";
	}
    return errors;
}
