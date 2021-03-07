import PropTypes from "prop-types";

const FilterByName = (props) => {
  const handleChange = (ev) => {
    props.handleFilter({
      key: "name",
      value: ev.target.value,
    });
  };
  return (
    <div className="form__search">
      <label className="form__label" htmlFor="name">
        Name:{" "}
        <input
          className="form__input"
          type="text"
          name="name"
          id="name"
          value={props.nameState}
          onChange={handleChange}
        />
      </label>
    </div>
  );
};
FilterByName.propTypes = {
  nameState: PropTypes.string,
  handleFilter: PropTypes.func,
};
export default FilterByName;
