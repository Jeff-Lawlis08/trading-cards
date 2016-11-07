import React from 'react';

const Nav = React.createClass({
  render(){
    return (
    <nav>
      <a href="#card/mop">Mop</a>
      <a href="#card/sponge">Sponge</a>
      <a href="#card/duster">Duster</a>
      <a href="#card/vacuum">Vacuum</a>
      <a href="#card/dustpan">Dustpan</a>
      <a href="#create">Create a Card!</a>
    </nav>
    );
  }
});
export default Nav;
