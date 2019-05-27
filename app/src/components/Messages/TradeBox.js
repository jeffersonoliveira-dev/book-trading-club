import React, {Component} from 'react';
import 

class TradeBox extends Component {
  render() {
    return (
      <div className="flex">
      <div className="item">
         <div className="tradeBox">
              <p> Fulano wants to trade his book called <br/>name of the book <br/> for your <br/> name of the book</p>
            <hr/>
            <div className="buttons">
               <div className="button"> 
                  <a className="accept" href="#">accept</a>
               </div>
               <div className="button"> 
                  <a className="reject" href="#">reject</a>
               </div>
            </div>
         </div>
      </div>
   </div>
    )
  }
}

export default TradeBox;
