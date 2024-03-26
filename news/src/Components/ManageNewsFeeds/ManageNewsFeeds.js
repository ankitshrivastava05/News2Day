// ManageNewsFeeds.js
import React, { useState, useEffect } from 'react';
import styles from "./ManageNewsFeeds.module.css";
import axios from 'axios'; // for API integration
import { Navigate } from 'react-router-dom';

function ManageNewsFeeds() {
  // State for holding news feeds data
  const [newsFeeds, setNewsFeeds] = useState([]);

//   useEffect(() => {
//     // Fetch news feeds from API
//     axios.get('api/news-feeds')
//       .then(response => {
//         setNewsFeeds(response.data);
//       })
//       .catch(error => {
//         console.error('Error fetching news feeds:', error);
//       });
//   }, []);

  useEffect(() => {
    // Mock data for demonstration (replace with actual API calls)
    const mockData = [
      { id: 1, title: 'News Feed 1', category: 'Category 1', creationDate: '2024-03-24', status: 'published' },
      { id: 2, title: 'News Feed 2', category: 'Category 2', creationDate: '2024-03-25', status: 'draft' },
      // Other mock news feeds
    ];
    setNewsFeeds(mockData);
  }, []);


  return (
    <div className={styles.managenewsfeedscontainer}>
      <h1>Manage News Feeds</h1>
      <table className={styles.newsfeedtable}>
        <thead>
          <tr>
            <th>Title</th>
            <th>Category</th>
            <th>Creation Date</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {newsFeeds.map(feed => (
            <tr key={feed.id}>
              <td>{feed.title}</td>
              <td>{feed.category}</td>
              <td>{feed.creationDate}</td>
              <td>{feed.status}</td>
              <td>
              <a type="button" className='btn btn-warning' href={`/edit/${feed.id}`}>Edit</a>
              <a type='button' className='btn btn-danger' onClick={()=>(feed.id)}>Delete</a>
              <button>View Detail</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ManageNewsFeeds;
