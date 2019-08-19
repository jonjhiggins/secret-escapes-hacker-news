import React, { useEffect, useState } from "react";

import "./App.css";
import Header from "./components/Header";
import Stories from "./components/Stories";
import { links as linksData } from "./data/header";
import appData from "./data/app";

const STORY_LIMIT = 100;

function App() {
  const [stories, setStories] = useState([]);

  /**
   * Get a list of latest story IDs from Hacker News "topstories" API endpoint
   * @returns {number[]} limited list of IDs
   */
  const getLatestStoryID = async () => {
    const resultsRequest = await fetch(
      " https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty"
    );
    const storyIDs = await resultsRequest.json();
    return storyIDs.slice(0, STORY_LIMIT - 1);
  };

  /**
   * Get story details from Hacker News "item" API endpoint
   * @param {object[]} - story objects
   */
  const getStoryDetails = async storyIDs =>
    Promise.all(
      storyIDs.map(async storyID => {
        const storyDetailRequest = await fetch(
          `https://hacker-news.firebaseio.com/v0/item/${storyID}.json?print=pretty`
        );
        return await storyDetailRequest.json();
      })
    );

  /**
   * Reformat the story objects to fit with stories component
   * @param {object[]} storyDetails
   * @returns {object[]}
   */
  const formatStoryObjects = storyDetails =>
    storyDetails.map(({ title, score, by, text }) => ({
      title,
      score,
      author: by,
      text 
    }));


  /**
   * Get data from Hacker News API and update component state
   */
  useEffect(() => {
    async function fetchData() {
      // Get latest story IDs
      const storyIDs = await getLatestStoryID();
      // Get story details from the IDs
      const storiesDetailRequests = await getStoryDetails(storyIDs);
      const storyDetailesFormatted = formatStoryObjects(
        await storiesDetailRequests
      );
      // Update the state
      setStories(await storyDetailesFormatted);
    }

    fetchData();
  }, []);

  return (
    <div className="App">
      <Header links={linksData} title={appData.appNameFriendly} />
      <main role="main">
        <Stories stories={stories} />
      </main>
    </div>
  );
}

export default App;
