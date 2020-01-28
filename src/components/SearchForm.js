import React, { useState } from "react";

function SearchForm(props) {
  const [results, setResults] = useState();

  const handleChanges = event => {
    setResults(event.target.value);
  };

  const submitHandler = event => {
    event.preventDefault();

    const characterSearch = props.characters.filter(character => {
      return character.name.toLowerCase().indexOf(results.toLowerCase()) !== -1;
    });

    props.search(characterSearch);
    console.log(characterSearch);
  };
 
  return (
    <section className="search-form">
      <form onSubmit={submitHandler}>
        <input
          onChange={handleChanges}
          type="text"
          name="character"
          id="character"
          placeholder="Search"
        ></input>    
      </form>
    </section>
  );
}

export default SearchForm;