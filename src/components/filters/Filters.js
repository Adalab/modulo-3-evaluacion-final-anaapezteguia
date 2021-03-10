import FilterByName from "../filters/FilterByName";
import FilterBySpecies from "../filters/FilterBySpecies";
import FilterByOrigin from "../filters/FilterByOrigin";
import FilterByStatus from "../filters/FilterByStatus";
import ResetButton from "../ResetButton";
import "../../stylesheets/layout/_filters.scss";
import PropTypes from "prop-types";

const handleSubmit = (ev) => {
  ev.preventDefault();
};
const Filters = (props) => {
  return (
    <section className="filters">
      <div className="wrapper">
        <form onSubmit={handleSubmit} className="form">
          <h2 className="form__title">Search by</h2>
          <FilterByName
            className="nameArea"
            handleFilter={props.handleFilter}
            filteredCharacters={props.filteredCharacters}
            nameState={props.nameState}
          />
          <FilterBySpecies
            className="speciesArea"
            handleFilter={props.handleFilter}
            speciesState={props.speciesState}
          />
          <FilterByOrigin
            className="originArea"
            handleFilter={props.handleFilter}
            getSelected={props.getSelected}
            originState={props.originState}
          />
          <FilterByStatus
            className="speciesArea"
            handleFilter={props.handleFilter}
            speciesState={props.statusState}
          />
          <ResetButton className="resetArea" handleReset={props.handleReset} />
        </form>
      </div>
    </section>
  );
};
Filters.propTypes = {
  filteredCharacters: PropTypes.arrayOf(PropTypes.object),
  nameState: PropTypes.string,
  speciesState: PropTypes.string,
  originState: PropTypes.array,
  statusState: PropTypes.string,
  handleFilter: PropTypes.func,
  handleReset: PropTypes.func,
  getSelected: PropTypes.array,
};
export default Filters;
