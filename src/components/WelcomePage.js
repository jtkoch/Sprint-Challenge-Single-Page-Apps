import React from "react";
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Home = styled.div`
display: flex;
flex-direction: column;
align-items: center;
padding: 20px;
border: 5px solid black;
margin: 10px;
text-align: center;
`

const Img = styled.img`
width: 50%;
padding: 15px;
border: 2px solid black;
`
const Button = styled.button`
padding: 20px;
margin: 50px;
font-size: 1.5rem;
`

export default function WelcomePage() {
  return (
    <section className="welcome-page">
      <Home>
        <h1>Welcome to the ultimate fan site!</h1>
        <Img
          className="main-img"
          src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
          alt="rick"
        />
        <Link to="/characters">
          <Button>Welcome</Button>
        </Link>
      </Home>
    </section>
  );
}