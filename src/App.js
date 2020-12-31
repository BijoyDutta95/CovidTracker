import styles from './App.module.css';
import React from 'react';
import {Cards,Charts,CountryPicker} from './components';
import {fetchData} from './api'

class App extends React.Component{

  async componentDidMount (){
    const data= await fetchData();
    console.log(data);
  }

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
