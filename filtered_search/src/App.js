import './App.css';
import React, {useState} from 'react';
import styled from 'styled-components';

function App() {

  const countries = [
    "Argentina",
    "Australia",
    "Bangladesh",
    "Belgium",
    "Canada",
    "Croatia",
    "Spain",
    "United Kingdom",
    "USA"
  ];

  const [filteredList, setFilteredList] = useState(countries);

  const handleSearch = (event) => {

    const filteredValues = countries.filter((country) =>  {
        return country.toLowerCase().indexOf(event.target.value.toLowerCase()) !== -1;
      }
    );

    setFilteredList(filteredValues);
  };

  // Create an array of items for displaying
  const filteredCountries = filteredList.map( (country, index) => {
    return <Country key={index}>{country}</Country>
  });

  return (
    <FilteredSearch>
      <div>
        Search: <SearchInput type="text" onChange={handleSearch} />
      </div>
      <CountryList>
        {filteredCountries}
      </CountryList>
  </FilteredSearch>
  );
}

const FilteredSearch = styled.div`
  width: 200px;
  margin: 0 auto;
  font-size: 1.5rem;
`;

const SearchInput = styled.input`
  font-size: inherit;
  border-radius: 5px;
  margin-top: 10px;
`;

const CountryList = styled.ul`
  padding-left: 0;
`;

const Country = styled.li`
  list-style: none;
`;

export default App;