import React, { useEffect, useState } from "react";
import axios from 'axios';
import {Link} from 'react-router-dom';
import CharacterCard from './CharacterCard.js';
import styled from "styled-components";
import SearchForm from './SearchForm';

const Grid = styled.div`
width: 100%;
display: flex;
Justify-content: center;
flex-wrap: wrap;
`;

export default function CharacterList() {
  const [characters, setCharacters] = useState([]);
  const [searchForm, setSearchForm] = useState([]);

  const search = characterArr => {
    setSearchForm(characterArr)
  };

  useEffect(() => {
    axios
      .get(`https://rickandmortyapi.com/api/character/`)
      .then(res => {
        setCharacters([...res.data.results]);
        setSearchForm(res.data.results);
      })
      .catch(error => 
        {console.log('error', error)
      })
  }, []);

  return (
    <Grid>
      <div>
        <Link to={"/"}>Home</Link>
        <SearchForm search={search} characters={characters} />
        {searchForm.map(character => (
          <CharacterCard key={character.id} characters={character} />
        ))}
      </div>
    </Grid>
  );
}