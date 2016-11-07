import React from 'react';
import Nav from './nav';

const Signup = React.createClass({
  render(){
    return (
      <div className="signup-div">
        <Nav/>
        <form className="signup-form">
          <input className="username" type="text" placeholder="username"/>
          <input className="email" type="email" placeholder="email"/>
          <input className="password" type="password" placeholder="password"/>
          <input type="submit" value="submit"/>
        </form>
        Already a member? <a href="#">Login Here!</a>
      </div>
    );
  }
});
export default Signup;
