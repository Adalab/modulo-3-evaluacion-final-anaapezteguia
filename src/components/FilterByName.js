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
        Name:
      </label>
      <input
        className="form__input"
        type="text"
        name="name"
        id="name"
        value={props.nameState}
        onChange={handleChange}
      />
    </div>
  );
};
FilterByName.propTypes = {
  nameState: PropTypes.string,
  speciesState: PropTypes.string,
  handleFilter: PropTypes.func,
};
export default FilterByName;
