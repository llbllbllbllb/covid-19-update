import React from 'react';

import { Cards,Chart,CountryPicker } from './components'
import styles from './App.module.css';

import { fetchData } from './api';

class App extends React.Component {

  state = {
    data: {},
    country: '',
  }

  async componentDidMount (){
    const fetchedData = await fetchData();
    console.log(fetchedData);
    this.setState({data: fetchedData});
  }

  handleCountryChange = async (c) => {
    console.log(c);
    //fetch data
    if(c === 'global'){
      c='';
    }
    const fetchedData = await fetchData(c);
    //set state
    console.log(fetchedData);
    this.setState({data: fetchedData, country: c});

  }

  render () {
    return (
      <div className = {styles.container}>
        <Cards data={this.state.data} country={this.state.country}/>
        <CountryPicker handleCountryChange={this.handleCountryChange}/>
        <Chart data={this.state.data} country={this.state.country}/>
  
      </div>
    );

  }

}

export default App;
