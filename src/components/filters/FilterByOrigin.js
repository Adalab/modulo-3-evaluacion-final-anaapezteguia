import PropTypes from "prop-types";

const FilterByOrigin = (props) => {
  const handleOrigin = (ev) => {
    props.handleFilter({
      key: "origin",
      value: ev.target.value,
    });
  };

  const originList = props.getSelected.map((origin, i) => {
    return (
      <label key={i} className="form__label--check">
        <input
          type="checkbox"
          name="origin"
          className="form__input--check"
          value={origin}
          onChange={handleOrigin}
          checked={props.originState.includes(origin)}
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
  originState: PropTypes.array,
  getSelected: PropTypes.array,
  handleFilter: PropTypes.func,
};
export default FilterByOrigin;
