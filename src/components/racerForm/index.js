import React from 'react';
import './index.css';


function RacerForm(props) {
  return (
    <div className="row">
      <div className="col-md-12">
        <form onSubmit={props.getStandings}>
          <input type="text" name="season" placeholder="Season..." />
          <input type="text" name="round" placeholder="Round..." />
          <input type="submit" value="Get Standings" />
        </form>
      </div>
    </div>
  );
}


export default RacerForm;
