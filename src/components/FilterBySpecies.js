//importar scss

const FilterBySpecies = (props) => {
  const handleChange = (ev) => {
    props.handleFilter({
      key: "species",
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
        name="selectSpecies"
        id="species"
        onChange={handleChange}
      >
        <option value="">Choose one</option>
        <option value="human">Human</option>
        <option value="alien">Alien</option>
        {/* <option value="wtf">WTF</option> */}
      </select>
    </>
  );
};
export default FilterBySpecies;
