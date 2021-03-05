import FilterByName from "./FilterByName";
import FilterBySpecies from "./FilterBySpecies";
import "../stylesheets/layout/_filters.scss";
import PropTypes from "prop-types";

const handleSubmit = (ev) => {
  ev.preventDefault();
};

const Filters = (props) => {
  return (
    <section className="filters">
      <div className="wrapper">
        <form onSubmit={handleSubmit}>
          <h2 className="form__title">Search by</h2>
          <FilterByName
            handleFilter={props.handleFilter}
            filteredCharacters={props.filteredCharacters}
            nameState={props.nameState}
          />
          <FilterBySpecies
            handleFilter={props.handleFilter}
            speciesState={props.speciesState}
          />
        </form>
      </div>
    </section>
  );
};
Filters.propTypes = {
  filteredCharacters: PropTypes.arrayOf(PropTypes.object),
  nameState: PropTypes.string,
  speciesState: PropTypes.string,
  handleFilter: PropTypes.func,
};
export default Filters;
