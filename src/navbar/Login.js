import React from "react";

class Login extends React.Component {
  state = {
    username: " ",
    pwd: " ",
  };

  handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you :)");
  };

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  render() {
    return (
      <div className="container">
        <p>
          My name is {this.state.username} and my password is {this.state.pwd}
        </p>
        <form onSubmit={this.handleSubmit}>
          <p>
            <label htmlFor="username">Username</label>
            <input
              type="text"
              name="username"
              id="username"
              placeholder="Type your username here"
              onChange={this.handleChange}
            />
          </p>
          <p>
            <label htmlFor="pwd">Password</label>
            <input
              type="text"
              name="pwd"
              id="pwd"
              placeholder="Type your password here"
              onChange={this.handleChange}
            />
          </p>
          <button className="center">Submit</button>
        </form>
      </div>
    );
  }
}

export default Login;
