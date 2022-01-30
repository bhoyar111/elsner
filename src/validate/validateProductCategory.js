export default function validateProductCategory(values) {
	let errors = {};
	if (!values.name) {
		errors.name = "Product Category is required";
	}
    return errors;
}