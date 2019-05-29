import React, {Component} from 'react';
import styled from 'styled-components';
import database from '../../firebase';

const Container = styled.div`
  position: relative;
  margin-top: 50px;
`;

const Flex = styled.div`
  display: flex;
  margin: 0 auto;
  max-width: 30%;
  min-width: 260px;
  flex-direction: column;
  justify-content: space-evenly;
`;

const Item = styled.div`
  flex: 1;
  border: 1px solid #ccc;
  text-align: center;
  margin: 10px;
  padding: 20px;
  box-shadow: 0 8px 6px -6px black;
`;

const Buttons = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;
`;

const Button = styled.a`
  text-decoration: none;
  color: white;
  font-weight: 600;
  padding: 10px;
  padding-right: 20px;
  padding-left: 20px;
`;

const AcceptButton = styled(Button)`
  background-color: skyblue;
`;
const RejectButton = styled(Button)`
  background-color: red;
`;

class TradeBox extends Component {
  constructor(props) {
    super();
    this.state = {
      name: '',
    };
  }

  componentWillMount() {
    database
      .collection('users')
      .doc(this.props.trade.userOffer)
      .get()
      .then(doc => this.setState({name: doc.data().name}));
  }

  onAccept = event => {};

  onReject = event => {};

  render() {
    console.log(this.props);
    return (
      <Container>
        <Flex>
          <Item>
            {this.state.name} wants to trade his book:
            <br />
            {this.props.trade.bookOffer} <br />
            for your book:
            <br />
            {this.props.trade.bookWish}
            <hr />
            <Buttons>
              <AcceptButton onClick={this.onAccept} href="#">
                accept
              </AcceptButton>
              <RejectButton onClick={this.onReject} href="#">
                reject
              </RejectButton>
            </Buttons>
          </Item>
        </Flex>
      </Container>
    );
  }
}

export default TradeBox;
