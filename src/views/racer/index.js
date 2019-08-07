import React, { Component } from 'react';
import './index.css';
import RacerForm from '../../components/racerForm';
import RacerTable from '../../components/racerTable';

// {} in import is for non-default imports


class Racer extends Component {
  constructor() {
    super();

    this.state = {
      'standings': []
    }
  }
  // using constructor because form and table both need access to it

  getStandings = async(e) => {
    e.preventDefault();

    let season = e.target.elements.season.value;
    let round = e.target.elements.round.value;

    const URL = `https://ergast.com/api/f1/${season}/${round}/driverStandings.json`

    let response = await fetch(URL);

    let data = await response.json();

    this.setState({
      'standings': data.MRData.StandingsTable.StandingsLists[0].DriverStandings
    });
  }

  render() {
    return (
      <div className="Racer">
        <RacerForm getStandings={this.getStandings} />
        <RacerTable standings={this.state.standings} />
      </div>
    );
  }
}


export default Racer;
