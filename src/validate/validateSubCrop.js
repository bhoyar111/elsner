export default function validateCrop(values) {
	let errors = {};
	if (!values.crop_id) {
		errors.crop_id = "Crop name is required";
	}
	if (!values.sub_crop_name) {
		errors.sub_crop_name = "Sub Crop name is required";
	}
    return errors;
}