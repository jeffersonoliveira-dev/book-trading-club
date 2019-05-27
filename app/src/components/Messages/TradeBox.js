import React, {Component} from 'react';
import styles from './styles/index'

class TradeBox extends Component {
  render() {
    return (
      <div className={styles.flex}>
      <div className={styles.item}>
         <div>
              <p> Fulano wants to trade his book called <br/>name of the book <br/> for your <br/> name of the book</p>
            <hr/>
            <div className={styles.buttons}>
               <div className={styles.button}> 
                  <a className={styles.accept} href="#">accept</a>
               </div>
               <div className={styles.button}> 
                  <a className={styles.reject} href="#">reject</a>
               </div>
            </div>
         </div>
      </div>
   </div>
    )
  }
}

export default TradeBox;
