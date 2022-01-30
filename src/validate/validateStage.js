export default function validateStage(values) {
	let errors = {};
	if (!values.stage_name) {
		errors.stage_name = "Stage name is required";
	}
    return errors;
}
