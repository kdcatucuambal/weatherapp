import React, { useState } from "react";
import { Search } from "../interfaces/Interfaces";

type FormElement = React.FormEvent<HTMLFormElement>;
type InputElement = React.ChangeEvent<HTMLInputElement | HTMLSelectElement>;

interface Props {
  search: Search;
  setSearch(search: Search): void;
  setQuery(query: boolean): void;
}

const Form = ({ search, setSearch, setQuery }: Props) => {
  //form sate

  const [error, setError] = useState(false);

  const handleSubmit = (e: FormElement) => {
    e.preventDefault();
    if (search.city.trim() === "" || search.country.trim() === "") {
      setError(true);
      return;
    }
    setError(false);
    setQuery(true);
    
  };

  const handleChange = (e: InputElement) => {
    setSearch({
      ...search,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      {error ? (
        <p className="red darken-4 error">All fields are required!</p>
      ) : null}
      <div className="input-field col s12">
        <input
          type="text"
          name="city"
          id="city"
          onChange={handleChange}
          value={search.city}
        />
        <label htmlFor="city">City: </label>
      </div>
      <div className="input-field col s12">
        <select
          name="country"
          id="country"
          value={search.country}
          onChange={handleChange}
        >
          <option value="">--Select a country --</option>
          <option value="US">Estados Unidos</option>
          <option value="MX">México</option>
          <option value="AR">Argentina</option>
          <option value="CO">Colombia</option>
          <option value="CR">Costa Rica</option>
          <option value="ES">España</option>
          <option value="PE">Perú</option>
          <option value="EC">Ecuador</option>
        </select>
        <label htmlFor="country">Country: </label>
      </div>

      <input
        type="submit"
        value="Search Weather"
        className="waves-effect waves-light btn-large btn-block yellow accent-4"
      />
    </form>
  );
};

export default Form;
