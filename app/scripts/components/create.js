import React from 'react';
import Nav from './nav';

const CreateCard = React.createClass({
  render(){
    return (
      <div className="creation-form">
        <Nav/>
        <form className="card-create">
          <input className="name" type="text" placeholder="name"/>
          <input className="ability" type="text" placeholder="ability"/>
          <input className="picture" type="text" placeholder="photo url"/>
          <input className="durability" type="number" placeholder="durability"/>
          <input className="cost" type="text" placeholder="cost"/>
          <input type="submit" value="submit"/>
        </form>
      </div>
    );
  }
});
export default CreateCard;
