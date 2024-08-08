import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const MyContext = createContext();

export const MyProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [voteCounts, setVoteCounts] = useState({});
  
  const handleAddText = (newPost) => {
    setData([...data, newPost]);
    
}

  useEffect(() => {
    axios.get('https://www.reddit.com/r/reactjs/hot.json')
      .then(response => {
        const fetchedPostsData = response.data.data.children.map(child => child.data);
        const initialVoteCounts = {};
        fetchedPostsData.forEach(post => {
          initialVoteCounts[post.id] = 0;
        });

        setData(fetchedPostsData);
        setVoteCounts(initialVoteCounts);

        
      })
      .catch(error => {
        console.error("Error fetching data from Reddit API:", error);
      });
  }, []);

  // posts={data}
  // onVote={(postId) => {
  //   setVoteCounts(prevCounts => ({
  //     ...prevCounts,
  //     [postId]: (prevCounts[postId] || 0) + 1
  //   }));
  // }}

  const exportValues = {
    data, setData, voteCounts, setVoteCounts, handleAddText
  }
  return (
    <MyContext.Provider value={exportValues }>
      {children}
    </MyContext.Provider>
  );
};