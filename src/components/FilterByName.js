//importar scss

const FilterByName = (props) => {
  const handleChange = (ev) => {
    props.handleFilter({
      key: "name",
      value: ev.target.value,
    });
  };
  return (
    <>
      <label className="form__label" htmlFor="name">
        Name:
      </label>
      <input
        className="form__input"
        type="text"
        name="name"
        id="name"
        onChange={handleChange}
      />
    </>
  );
};
export default FilterByName;
