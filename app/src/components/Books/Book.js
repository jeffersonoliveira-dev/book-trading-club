import React from 'react';

class Book extends React.Component {
  render() {
    return (
      <div>
        <div>{this.props.name}</div>
      </div>
    );
  }
}

// name , username,

export default Book;
