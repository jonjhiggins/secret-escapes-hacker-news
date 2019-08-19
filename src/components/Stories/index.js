import React from "react";

import Story from "../Story";
import "./index.css";

export default function Stories({ stories }) {
  return (
    <div className="stories">
      {" "}
      {stories.map((story, index) => (
        <Story story={story} key={index} />
      ))}
    </div>
  );
}
