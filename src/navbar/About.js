import React from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";

class About extends React.Component {
  state = {
    posts: [],
  };

  componentDidMount() {
    axios.get("https://jsonplaceholder.typicode.com/posts").then((res) => {
      this.setState({
        posts: res.data.slice(1, 15),
      });
    });
  }

  render() {
    const { posts } = this.state;
    const postsList = posts.length ? (
      posts.map((post) => {
        return (
          <div className="card" key={post.id}>
            <NavLink to={"/" + post.id}>
              <h1 className="card-title">{post.title}</h1>
            </NavLink>
            <p className="card-content">{post.body}</p>
          </div>
        );
      })
    ) : (
      <div className="card">
        <p className="card-content">Posts loading...</p>
      </div>
    );
    return (
      <div className="">
        <h1 className="center">About</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. At esse
          pariatur possimus nihil. Id iure numquam cum a accusantium inventore,
          qui ipsum, doloremque necessitatibus nisi sequi aut natus tempora
          fugit.
        </p>

        <div>{postsList}</div>
      </div>
    );
  }
}

export default About;
