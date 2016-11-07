import React from 'react';

const Signup = React.createClass({
  render(){
    return (
      <form className="signup-form">
        <input className="username" type="text" placeholder="username"/>
        <input className="email" type="email" placeholder="email"/>
        <input className="password" type="password" placeholder="password"/>
        <input type="submit" value="submit"/>
      </form>
    );
  }
});
export default Signup;
