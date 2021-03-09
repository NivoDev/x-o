import React, { useState }from "react";
import '../index.css'
// import Game from "./Game"
import GetCode from "./GetCode";
import EnterCode from "./EnterCode";
import NameInput from "./NameInput";
import styled from "styled-components";
import { findAllByDisplayValue } from "@testing-library/react";
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";


function Start (){
const [ playerName , setName ] = useState('');
const [ code, setCode ] = useState('')
const [ codeState , setCodeState ] = useState('');
const [ game, setGame] = useState(null)

function startGame(){
  //api request t ostart game
  console.log(playerName, code);

  setGame({
    me: {
      name: playerName,
      wins: 5
    },
    opponent:{ 
      name: 'moshe',
      wins: 8
    },
    isMyTurn: false,
    mySign:'x',
    board:[
      ['x', 'o', 'x'],
      ['', '0', ''],
      ['o', '', 'x']
    ]

  });
}
    return (
      <>
        <Header>
          X-O 
        </Header>
        <NameInput onChange={setName}/>
        <Section>
          { codeState ? ( codeState === 'get' ? (<GetCode onGiven={giveCode}/>) : (<><ButtonGet onClick={()=> setCodeState('get')}>
            Open room
          </ButtonGet>
          <ButtonEnter onClick={()=> setCodeState('enter')}>
            Enter an existing room
          </ButtonEnter></>)}
          
          </Section>
      </>
    );
}

export default Start;

const ButtonGet = styled.button`
border:none;
padding:10px;
margin:10px;
font-weight: bold;
}
:hover{
  background-color:blue;
  color:white;
}
`;
const ButtonEnter = styled(ButtonGet)`
  :hover {
    background-color: green;
  }
`;

const Section = styled.div`
display:fixed;
justify-content:center;
bottom:0;
`;

const Header = styled.h1`
padding:80px;
letter-spacing: 1rem;
color:white;
font-size:25px;
display:fixed;
justify-content:center;
`
