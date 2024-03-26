import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from "./Dashboard.module.css";
import axios from 'axios'; // for API integration

function Dashboard() {
  // State for holding dashboard data
  const [dashboardData, setDashboardData] = useState(null);

  useEffect(() => {
    // Fetch dashboard data from API
    axios.get('api/dashboard')
      .then(response => {
        setDashboardData(response.data);
      })
      .catch(error => {
        console.error('Error fetching dashboard data:', error);
      });
  }, []);

  return (
    <div className={styles.dashboard}>
      <h1>Dashboard</h1>
      {dashboardData && (
        <div className={styles.stats}>
          <div className={styles.stat}>
            <h2>User Activity</h2>
            <p>{dashboardData.userActivity}</p>
          </div>
          {/* Other dashboard metrics */}
        </div>
      )}
      <div className={styles.links}>
        <Link to="/create-news-feed" className={styles.link}>Create News Feed</Link>
        <Link to="/manage-news-feeds" className={styles.link}>Manage News Feeds</Link>
        <Link to="/performance-reports" className={styles.link}>Performance Reports</Link>
      </div>
    </div>
  );
}

export default Dashboard;
