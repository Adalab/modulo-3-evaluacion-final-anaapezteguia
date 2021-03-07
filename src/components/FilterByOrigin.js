import PropTypes from "prop-types";

const FilterByOrigin = (props) => {
  const handleOrigin = (ev) => {
    props.handleFilter({
      key: "origin",
      value: ev.target.value,
    });
  };

  const originList = props.uniqueOrigin.map((origin, i) => {
    return (
      <label key={i} className="form__label--check">
        <input
          type="checkbox"
          name="origin"
          className="form__input--check"
          value={origin}
          onClick={handleOrigin}
        />{" "}
        <span className="form__input--name">{origin}</span>
      </label>
    );
  });
  return (
    <div className="form__search--check">
      <span className="labelName block">Origin: </span>
      {originList}
    </div>
  );
};
FilterByOrigin.propTypes = {
  uniqueOrigin: PropTypes.array,
  handleFilter: PropTypes.func,
};
export default FilterByOrigin;
