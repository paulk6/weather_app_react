import React, { Component } from 'react';
import './index.css';

// {} in import is for non-default imports


class WeatherInfo extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-md-12">
          <h3>City: Boston</h3>
          <h3>Country: US</h3>
          <h3>Temperature: 87&deg;</h3>
          <h3>Humidity: 34%</h3>
          <h3>Description: Cloudy with a change of meatballs</h3>
        </div>
      </div>
    );
  }
}


export default WeatherInfo;
