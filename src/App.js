import styles from './App.module.css';
import React from 'react';
import {Cards,Chart,CountryPicker} from './components';
import {fetchData} from './api'

class App extends React.Component{

  state ={
    data:{},
  }

  async componentDidMount (){
    const fetchedData= await fetchData();
    this.setState({data:fetchedData});
  }

  render(){
    const {data} = this.state;
    return (
      <div className={styles.globalContainer}>
        <Cards data={data}/>
        <Chart/>
        <CountryPicker/>
      </div>
    )
  }
}
export default App;
