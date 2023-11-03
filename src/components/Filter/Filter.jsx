import { FilterStyle } from './Filter.styled';
export const Filter = ({ filterValue, handleInputFilterChange }) => {
  return (
    <div>
      <h2>Find contacts by name</h2>
      <FilterStyle
        type="text"
        value={filterValue}
        onChange={handleInputFilterChange}
      />
    </div>
  );
};
