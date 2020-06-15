import React from "react";

import Rainbow from "./Rainbow";

const Contact = (props) => {
  setTimeout(() => {
    props.history.push("/");
  }, 5000);
  return (
    <div className="">
      <h1 className="center">Contact</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. At esse
        pariatur possimus nihil. Id iure numquam cum a accusantium inventore,
        qui ipsum, doloremque necessitatibus nisi sequi aut natus tempora fugit.
      </p>
    </div>
  );
};

export default Rainbow(Contact);
