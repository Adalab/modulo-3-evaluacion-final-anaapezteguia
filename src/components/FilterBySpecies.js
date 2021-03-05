//importar scss

const FilterBySpecies = (props) => {
  const handleChange = (ev) => {
    props.handleFilter({
      key: "speciesValue",
      value: ev.target.value,
    });
  };
  return (
    <>
      <label className="form__label" htmlFor="species">
        Species:
      </label>
      <select
        className="form__input"
        name="speciesValue"
        id="species"
        value={props.speciesState}
        onChange={handleChange}
      >
        <option value="noFilter">Choose one</option>
        <option value="Human">Human</option>
        <option value="Alien">Alien</option>
      </select>
    </>
  );
};
export default FilterBySpecies;
