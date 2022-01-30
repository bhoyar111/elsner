export default function validateAskTheExpert(values) {
    let errors = {};
    if (!values.subject) {
        errors.subject = "subject is required";
    }
    if (!values.ask_date) {
      errors.ask_date = "ask_date is required";
    }
    if (!values.description) {
        errors.description = "description is required";
    }
    return errors;
}
