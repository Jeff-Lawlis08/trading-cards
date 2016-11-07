// import data from '../data';
import React from 'react';
const Card = React.createClass({
  render() {
    return (
      <div className="card">
        <h2 className="card-title">{this.props.data.name}</h2>
          <img src={this.props.data.picture}/>
          <span className="ability">Ability: {this.props.data.ability}</span>
          <span className="durability">Durability: {this.props.data.durability}</span>
          <span className="cost">Cost: {this.props.data.cost}</span>
      </div>
    );
  }
});

export default Card;
