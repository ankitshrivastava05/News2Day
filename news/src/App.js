import React from 'react';
import { Route, BrowserRouter, Routes } from 'react-router-dom';

// import ManageNewsFeeds from './ManageNewsFeeds';
// import PerformanceReports from './PerformanceReports';
import Dashboard from './Components/Dashboard/Dashboard';
import CreateNewsFeed from './Components/CreateNewsFeed/CreateNewsFeed';
import ManageNewsFeeds from './Components/ManageNewsFeeds/ManageNewsFeeds';
import PerformanceReports from './Components/PerformanceReports/PerformanceReports';

function App() {
  return (
    
      <div className="app">
        <BrowserRouter>
        <Routes>
        <Route exact path='/' element={<Dashboard/>}/>
        <Route exact path='/create-news-feed' element={<CreateNewsFeed/>}/>
        <Route exact path='/manage-news-feeds' element={<ManageNewsFeeds/>}/>
        <Route exact path='/performance-reports' element={<PerformanceReports/>}/>
        </Routes>  
        </BrowserRouter>
      </div>
  );
}

export default App;
