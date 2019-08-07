import React, { Component } from 'react';
import './index.css';
import AnimalInfo from '../../components/animalInfo';
import AnimalForm from '../../components/animalForm';


class Animal extends Component {
  constructor() {
    super();

    this.state = {
      'data': [],
    }
  }

    getAnimals = async(e) => {
      e.preventDefault();
      let selection = ''
      if (document.getElementById('Meowsy').checked) {
        selection = 0;
      } else if (document.getElementById('Barky').checked) {
        selection = 1;
      } else if (document.getElementById('Purrpaw').checked) {
        selection = 2;
      }

    const URL = 'https://learnwebcode.github.io/json-example/animals-1.json';

    let response = await fetch(URL);

    let data = await response.json();

    this.setState({ data })
    this.setState({ data : data[selection]})
  }

  render() {
    return (
      <div className="row">
        <div className="col-md-4">
          <AnimalForm getAnimals={this.getAnimals}/>
          <AnimalInfo data={this.state.data}/>
        </div>
      </div>
    );
  }
}

export default Animal;
