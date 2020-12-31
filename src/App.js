import styles from './App.module.css';
import React from 'react';
import {Cards,Charts,CountryPicker} from './components';

class App extends React.Component{
  render(){
    return (
      <div className={styles.globalContainer}>
        <Cards/>
        <Charts/>
        <CountryPicker/>
      </div>
    )
  }
}
export default App;
