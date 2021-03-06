import PropTypes from "prop-types";

const FilterBySpecies = (props) => {
  const handleChange = (ev) => {
    props.handleFilter({
      key: "speciesValue",
      value: ev.target.value,
    });
  };
  return (
    <div className="form__search">
      <label className="form__label" htmlFor="species">
        Species:{" "}
        <select
          className="form__input species"
          name="speciesValue"
          id="species"
          value={props.speciesState}
          onChange={handleChange}
        >
          <option value="noFilter">Choose one</option>
          <option value="Human">Human</option>
          <option value="Alien">Alien</option>
        </select>
      </label>
    </div>
  );
};
FilterBySpecies.propTypes = {
  speciesState: PropTypes.string,
  handleFilter: PropTypes.func,
};
export default FilterBySpecies;
