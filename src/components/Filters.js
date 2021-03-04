import FilterByName from "./FilterByName";
// import FilterBySpecies from "./FilterBySpecies";
import "../stylesheets/layout/_filters.scss";

const handleSubmit = (ev) => {
  ev.preventDefault();
};

const Filters = (props) => {
  return (
    <section className="filters">
      <form onSubmit={handleSubmit}>
        <h2 className="form__title">Search by</h2>
        <FilterByName handleFilter={props.handleFilter} />
        {/* <FilterBySpecies handleFilter={props.handleFilter} /> */}
      </form>
    </section>
  );
};
export default Filters;
