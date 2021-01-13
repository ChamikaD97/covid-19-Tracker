import React from 'react';

import { Cards, CountryPiker, Charts } from './components';
import { fetchData } from './api/';
import styles from './App.module.css';

import image from './images/logo.jpg';

class App extends React.Component {
  state = {
    data: {},
    country: '',
  }

  async componentDidMount() {
    const data = await fetchData();

    this.setState({ data });
  }

  handleCountryChange = async (country) => {
    const data = await fetchData(country);

    this.setState({ data, country: country });
  }

  render() {
    const { data, country } = this.state;

    return (
      <div className={styles.container}>
        <img className={styles.image} src={image} alt="COVID-19" />
        <Cards data={data} />
        <CountryPiker handleCountryChange={this.handleCountryChange} />
        <Charts data={data} country={country} />
        <h4 className={styles.details} >Developed By : Chamika Deshan Jayasingha -
        Undergraduate at University of Colombo School of Computing</h4> 
      </div>
    );
  }
}

export default App;