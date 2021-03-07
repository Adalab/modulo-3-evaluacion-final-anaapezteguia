import PropTypes from "prop-types";

const ResetButton = (props) => {
  const handleReset = () => {
    props.handleReset();
  };

  return (
    <input
      type="button"
      name="reset"
      value="Reset"
      className="form__reset"
      onClick={handleReset}
    />
  );
};

ResetButton.propTypes = {
  handleReset: PropTypes.func,
};

export default ResetButton;
