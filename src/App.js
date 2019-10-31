import React, { useState, useEffect } from 'react';
import './App.css';
import Infos from './components/Infos';
import ReposList from './components/ReposList';
import StarredList from './components/StarredList';

function App() {
  const [infoData, setInfoData] = useState(false);
  const [infoReposListData, setInfoReposListData] = useState(false);
  const [infoStarredListData, setInfoStarredListData] = useState(false);

  useEffect(() => {
    setTimeout(() => setInfoData(true), 1000);
    setTimeout(() => setInfoReposListData(true), 1500);
    setTimeout(() => setInfoStarredListData(true), 2000);
  }, []);
  return (
    <div className="App">
      <Infos data={infoData} />
      <ReposList data={infoReposListData} />
      <StarredList data={infoStarredListData} />
    </div>
  );
}

export default App;
