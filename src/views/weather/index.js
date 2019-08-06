import React, { Component } from 'react';
import './index.css';
import WeatherTitle from '../../components/weatherTitle';
import WeatherForm from '../../components/weatherForm';
import WeatherInfo from '../../components/weatherInfo';
import API_KEY from '../../config.js'

// {} in import is for non-default imports


class Weather extends Component {
  constructor() {
    super();

    this.state = {
      'data': [],
      'API_KEY': ''
    }
  }

  // component will mount is where you declare variables?

  componentWillMount() {
    // when the name of the value is the same as the key, you can simply use one name and it's implied
    // this.setState({ 'API_KEY' : 'API_KEY'}) is the same as
    // this.setState({ 'API_KEY' : ''})
    this.setState({ API_KEY });
  }

  getWeather = async(e) => {
    e.preventDefault();

    let city = e.target.elements.city.value;
    let country = e.target.elements.country.value;

    if (country === '' || country === null) {
      country = 'US'; }
    if (city === '' || city === null) {
      city = 'Boston';
    }

    const URL = `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=${this.state.API_KEY}&units=imperial`;

    let response = await fetch(URL);

    let data = await response.json();

    this.setState({ data })
  }


  render() {
    return (
      <div className="row">
        <div className="col-md-4">
          <WeatherTitle />
        </div>
        <div className="col-md-8">
          <WeatherForm getWeather={this.getWeather} />
          <WeatherInfo data={this.state.data} />
        </div>
      </div>
    );
  }
}


export default Weather;
