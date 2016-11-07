import React from 'react';

const Login = React.createClass({
  render(){
    return (
      <form className="login-form">
        <input className="email" type="email" placeholder="email"/>
        <input className="password" type="password" placeholder="password"/>
        <input type="submit" value="submit"/>
      </form>
    );
  }
});
export default Login;
