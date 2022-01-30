export default function validateProduct(values) {
	let errors = {};
	if (!values.product_name) {
		errors.product_name = "Product name is required";
	}
	if (!values.price) {
		errors.price = "Product Price is required";
	}
	if (!values.price) {
		errors.price = "Product Price is required";
	}
    return errors;
}
