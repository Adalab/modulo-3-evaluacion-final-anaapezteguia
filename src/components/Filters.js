import FilterByName from "./FilterByName";
//importar scss

const handleSubmit = (ev) => {
  ev.preventDefault();
};

const Filters = (props) => {
  return (
    <section className="filters">
      <form onSubmit={handleSubmit}>
        <FilterByName handleFilter={props.handleFilter} />
      </form>
    </section>
  );
};
export default Filters;
