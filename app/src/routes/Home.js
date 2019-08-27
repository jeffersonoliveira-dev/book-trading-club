import React, {Component} from 'react';
import styled from 'styled-components';

const Container = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 3px 3px 5px 6px #ccc;
  padding: 30px;
`;

const Title = styled.h1`
  @import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');
  font-family: 'Roboto', sans-serif;
`;

export default class Home extends Component {
  render() {
    return (
      <Container>
        <Title>Welcome to the book trading club</Title>
      </Container>
    );
  }
}

// centralize component
