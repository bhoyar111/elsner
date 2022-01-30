export default function validateStageInfo(values) {
	let errors = {};
	if (!values.stage_id) {
		errors.stage_id = "Stages name is required";
	}
	if (!values.name) {
		errors.name = "Sub Stages name is required";
	}
    return errors;
}
