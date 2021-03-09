import React, { Component } from "react";
import styled from "styled-components";

export default class Name_input extends Component {
  state = {
    your_name: ""
  };

  update_answer = (event) => {
    console.log(event.target);
    this.setState({ your_name: event.target.value });
  };

  render() {
    return (
      <>
          <Input
           placeholder="Your name here..."
            onChange={this.update_answer}
          />
        <NameDisplay onChange={}>
          Your name: {this.state.your_name}
        </NameDisplay>
      </>
    );
  }
}
const Input = styled.input`
color:black;
border: none;
font-size:20px;
display:fixed;
margin:auto;
padding:10px;
margin:auto;
`
const NameDisplay = styled.h3`
letter-spacing: 0.3rem;
color:red;
font-size:25px;
display:fixed;
justify-content:center;

`
