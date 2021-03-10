import PropTypes from "prop-types";

const FilterByStatus = (props) => {
  const handleChange = (ev) => {
    props.handleFilter({
      key: "statusValue",
      value: ev.target.value,
    });
  };
  return (
    <div className="form__search">
      <label className="form__label" htmlFor="status">
        Status:{" "}
        <select
          className="form__input species"
          name="statusValue"
          id="status"
          value={props.statusState}
          onChange={handleChange}
        >
          <option value="All">Choose one</option>
          <option value="Dead">Dead</option>
          <option value="Alive">Alive</option>
          <option value="unknown">Unknown</option>
        </select>
      </label>
    </div>
  );
};
FilterByStatus.propTypes = {
  statusState: PropTypes.string,
  handleFilter: PropTypes.func,
};
export default FilterByStatus;
