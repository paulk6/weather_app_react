import React, { Component } from 'react';
import './index.css';


class AnimalInfo extends Component {
  render() {
    let data = this.props.data
    console.log(data)


    return (
      <div className="row">
        <div className="col-md-12">
        {/* below is an if statement, saying if the data exists then show the information, must return one element from state, which is why we wrapped 5 h3's in a div.*/}
        {/* && is basically shorthand for if the thing before it is true. it's the only way to do if statements in jsx*/}
        { data.name &&
          <div>
          <h3>Name: {data.name}</h3>
          <h3>Species: {data.species}</h3>
          </div>
        }

        {/* Error message will appear if they put in a city that doesn't exist */}
        {
          data.cod === '404' &&
          <h3>Error: {data.message}</h3>
        }
        </div>
      </div>
    );
  }
}


export default AnimalInfo;
