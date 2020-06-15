import React from "react";
import axios from "axios";

class Post extends React.Component {
  state = {
    post: {},
  };

  componentDidMount() {
    let id = this.props.match.params.post_id;
    console.log(id);
    axios
      .get("https://jsonplaceholder.typicode.com/posts/" + id)
      .then((res) => {
        this.setState({
          post: res.data,
        });
      });
  }

  render() {
    const { post } = this.state;
    const postRender = post ? (
      <div>
        <h1>
          Post number {post.id} : {post.title}
        </h1>
        <p>{post.body}</p>
      </div>
    ) : (
      <div>
        <p>Post Loading...</p>
      </div>
    );

    return <div>{postRender}</div>;
  }
}

export default Post;
