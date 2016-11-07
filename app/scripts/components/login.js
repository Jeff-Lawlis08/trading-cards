import React from 'react';
import Nav from './nav';

const Login = React.createClass({
  render(){
    return (
      <div className="login-div">
        <Nav/>
        <form className="login-form">
          <input className="email" type="email" placeholder="email"/>
          <input className="password" type="password" placeholder="password"/>
          <input type="submit" value="submit"/>
        </form>
        Not a member? <a href="#signup">Signup Here!</a>
      </div>
    );
  }
});
export default Login;
