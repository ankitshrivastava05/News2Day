// CreateNewsFeed.js
import React, { useState } from 'react';
import styles from "./CreateNewsFeed.module.css";
import axios from 'axios'; // for API integration

function CreateNewsFeed() {
  // State for form fields
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [category, setCategory] = useState('');
  const [image, setImage] = useState(null); // For image upload

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // Prepare form data
    const formData = new FormData();
    formData.append('title', title);
    formData.append('content', content);
    formData.append('category', category);
    formData.append('image', image);
    // Send form data to server for news feed creation
    axios.post('api/create-news-feed', formData)
      .then(response => {
        // Handle success, show success message or redirect
        console.log('News feed created successfully:', response.data);
      })
      .catch(error => {
        console.error('Error creating news feed:', error);
      });
  };

  // Handle image upload
  const handleImageChange = (event) => {
    setImage(event.target.files[0]);
  };

  return (
    <div className={styles.createnewsfeedcontainer}>
      <h1>Create News Feed</h1>
      <div className={styles.formcontainer}>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} required />
          <textarea placeholder="Content" value={content} onChange={(e) => setContent(e.target.value)} required />
          <input type="text" placeholder="Category" value={category} onChange={(e) => setCategory(e.target.value)} required />
          <input type="file" onChange={handleImageChange} accept="image/*" /> {/* For image upload */}
          <button type="submit">Publish</button>
        </form>
      </div>
    </div>
  );
}

export default CreateNewsFeed;
