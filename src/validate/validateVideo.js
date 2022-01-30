export default function validateVideo(values) {
    let errors = {};
    if (!values.title) {
        errors.title = "title is required";
    }
    if (!values.sub_crop_id) {
        errors.sub_crop_id = " sub_crop_id is required";
    }
    if (!values.link) {
        errors.link = "link is required";
    }
    if (!values.v_date) {
        errors.v_date = " Dealer v_date is required";
    }
    return errors;
}
