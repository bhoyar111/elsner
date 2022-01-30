export default function validateCrop(values) {
	let errors = {};
	if (!values.crop_name) {
		errors.crop_name = "Crop name is required";
	}
    return errors;
}