import React from "react";

function CharacterCard({characters}) {
  console.log(characters)
    return( 
      <div className="characters">
        <img src={characters.image} alt={characters.name} />
        <h1>{characters.name}</h1>
        <h3>Species:{characters.species} Status: {characters.status}</h3>
        <h3>Location: {characters.location.name} Origin:{characters.origin.name}</h3>
        {console.log(characters)}
      </div>
  );    
}

export default CharacterCard;