import React, { useEffect, useState } from "react";
import axios from 'axios';
import CharacterCard from './CharacterCard.js';
import styled from "styled-components";

const Grid = styled.div`
width: 100%;
display: flex;
Justify-content: center;
flex-wrap: wrap;
`;

export default function CharacterList() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    axios
      .get(`https://rickandmortyapi.com/api/character/`)
      .then(res => {
        setCharacters([...res.data.results]);
      })
      .catch(error => 
        {console.log('error', error)
      })
  }, []);

  return (
    <Grid>
      <div>{characters.map(character => (
        <CharacterCard key={character.id} characters={character} />
      ))}
      </div>
    </Grid>
  );
}

// TODO: Add API Request here - must run in `useEffect`
//  Important: verify the 2nd `useEffect` parameter: the dependancies array!