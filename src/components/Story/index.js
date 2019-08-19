import React from "react";

import "./index.css";

export default function Story({ story }) {
  const { title, author, text, score } = story;

  /**
   * Return a short excerpt from the article content
   * Regex from https://stackoverflow.com/a/5454297
   * @TODO escape the text to avoid XSS attack
   * @param {string} text
   */
  const getExcept = text => `${text.replace(/^(.{200}[^\s]*).*/, "$1")}...`;

  return (
    <article className="story">
      <div className="story-main">
        <h2 className="story-title">{title}</h2>
        <p className="story-author">{author}</p>
        <div dangerouslySetInnerHTML={{ __html: getExcept(text) }} />
      </div>
      <div className="story-extra">
        <button type="button" className="story-upvote">
          <span className="story-upvote-arrow" />
          <span className="story-upvote-text">Upvote</span>
        </button>
        <p className="story-score">{score}</p>
      </div>
    </article>
  );
}
