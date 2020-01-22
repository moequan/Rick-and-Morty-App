import React, { useState, useEffect } from 'react';
import Character from './Character';
import '../scss/App.scss';

const Episode = props => {
  const { name, air_date, episode, characters } = props.data;
  const [charactersInfo, updateCharactersInfo] = useState([]);

  useEffect(() => {
    fetchData(characters);
  }, [characters]);

  const fetchData = async characters => {
    let data = await Promise.all(
      characters.map(async el => {
        return await (await fetch(el)).json();
      })
    );

    updateCharactersInfo(data);
  };

  const charactersList = charactersInfo.map(el => {
    return <Character data={el} key={el.id}></Character>;
  });

  return (
    <div className="episode">
      <div className="info">
        <div className="left">
          <p>{name}</p>
          <p>({episode})</p>
        </div>
        <div className="right">
          <p>{air_date}</p>
        </div>
      </div>
      <div className="characters">{charactersList}</div>
    </div>
  );
};

export default Episode;
