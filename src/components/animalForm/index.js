import React, { Component } from 'react';
import './index.css';


class AnimalForm extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-md-12">
          <form onSubmit={this.props.getAnimals}>
            <div>
              <input id="Meowsy" type="radio" name="radio" value="Meowsy"/>
              <label for="Meowsy">Meowsy</label>
            </div>
            <div>
              <input id="Barky" type="radio" name="radio" value="Barky" label for="Barky"/>
              <label for="Barky">Barky</label>
            </div>
            <div>
              <input id="Purrpaw" type="radio" name="radio" value="Purrpaw" label for="Purrpaw"/>
              <label for="Purrpaw">Purrpaw</label>
            </div>
            <input type="submit" value="Get Animal!"/>
          </form>
        </div>
      </div>
    );
  }
}


export default AnimalForm;
