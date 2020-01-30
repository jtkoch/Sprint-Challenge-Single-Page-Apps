import React from "react";
import styled from 'styled-components';


const Cards = styled.div`
width: 100%;
padding: 20px;
border: 5px solid black;
margin: 10px;
text-align: center;
`;

const Img = styled.img`
width: 100%;
`




function CharacterCard({characters}) {
  console.log(characters)
    return( 
      <Cards>
        <Img src={characters.image} alt={characters.name} />
        <h1>{characters.name}</h1>
        <h3>Species:{characters.species} </h3>
        <h3>Status: {characters.status}</h3>
        <h3>Location: {characters.location.name}</h3>
        <h3>Origin:{characters.origin.name}</h3>
        {console.log(characters)}
      </Cards>
  );    
}

export default CharacterCard;