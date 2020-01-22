
import React, { useState, useEffect } from 'react';
import Episode from './Episode';
import '../scss/App.scss';

const App = () => {
 const [episodes, setEpisodes] = useState({ info: {}, results: [] });

 useEffect(() => {
   fetchData();
 }, []);

 const fetchData = async () => {
   const url = `https://rickandmortyapi.com/api/episode`;
   const data = await (await fetch(url)).json();
   setEpisodes(data);
 };

 const episodesList = episodes.results.map(el => {
   return <Episode data={el} key={el.id}></Episode>;
 });

 return <div className="app">{episodesList}</div>;
};

export default App;
