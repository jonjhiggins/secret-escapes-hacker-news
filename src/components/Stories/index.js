import React, { useState } from "react";

import Story from "../Story";
import "./index.css";

export default function Stories({ stories }) {
  const [activeStoryIndex, setActiveStoryIndex] = useState(-1);

  /**
   * Set a story to be active, set others to be inactive
   * @param {number} storyIndex
   */
  const setActiveStory = storyIndex => {
    setActiveStoryIndex(activeStoryIndex => {
      // If clicking an active story toggle it to be inactive,
      // otherwise set the active story index
      return storyIndex !== activeStoryIndex ? storyIndex : -1;
    });
  };

  return (
    <div className="stories">
      {" "}
      {stories.map((story, index) => (
        <Story
          story={story}
          setActiveStory={setActiveStory}
          key={index}
          active={activeStoryIndex === index}
          index={index}
        />
      ))}
    </div>
  );
}
