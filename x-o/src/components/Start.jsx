import React, { useState }from "react";
import '../index.css'
// import Game from "./Game"
import GetCode from "./GetCode";
import EnterCode from "./EnterCode";
import NameInput from "./NameInput";
import styled from "styled-components";


function Start ({ onStart }){
  const [ playerName , setName ] = useState('');
  const [ codeState , setCodeState ] = useState('');
  const [ code, setCode ] = useState('');

  function startGame(){
  const response = await fetch("http://Localhost/3000/api/game/start", {body: JSON.stringify({playerName , code})})
    console.log(playerName, code);

    onStart({playerName,code,game});
  }
   return (<>
     <Header>
          X-O 
        </Header>
        <NameInput onChange={setName}/>
          {codeState ? ( 
            <>
              <div>
               {codeState === 'get' ? (<GetCode onGive={setCode}/>) : (<EnterCode onChange={setCode}/>)}
               <button onclick={startGame}>Start game</button>

              </div>
            </>
              ) : (
                <>
                  <button onclick={()=> setCodeState('get')}>Get a code</button>
                  <button onclick={()=> setCodeState('enter')}>Enter a code</button>
                </>)
            }
      
     </>)
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
