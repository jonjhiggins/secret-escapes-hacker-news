import React from "react";

import "./index.css";

export default function Story({ story, setActiveStory, active, index }) {
  const { title, author, text, score } = story;

  /**
   * Return a short excerpt from the article content
   * Regex from https://stackoverflow.com/a/5454297
   * @TODO escape the text to avoid XSS attack
   * @param {string|undefined} text
   */
  const getExcept = text =>
    text ? `${text.replace(/^(.{200}[^\s]*).*/, "$1")}...` : "";

  /**
   * @TODO upvote functionality
   */
  const upvote = e => {
    e.stopPropagation();
    alert("Upvote");
  };

  /**
   * Only set active story on hitting enter when using keyboard nav
   * @param {Event} event
   */
  const handleKeyDown = event => event.keyCode !== 13 || setActiveStory(index);
  return (
    <article
      className={`story ${active ? "is-active" : ""}`}
      role="button"
      onClick={() => setActiveStory(index)}
      onKeyDown={handleKeyDown}
      tabIndex="0"
    >
      <div className="story-main">
        <h2 className="story-title">{title}</h2>
        <p className="story-author">{author}</p>
        <div
          dangerouslySetInnerHTML={{ __html: active ? text : getExcept(text) }}
        />
      </div>
      <div className="story-extra">
        <button type="button" className="story-upvote" onClick={upvote}>
          <span className="story-upvote-arrow" />
          <span className="story-upvote-text">Upvote</span>
        </button>
        <p className="story-score">{score}</p>
      </div>
    </article>
  );
}
