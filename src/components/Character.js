import React from 'react';

const Character = props => {
  const { name, image } = props.data;

  return (
    <div className="character">
      <img src={image} alt={name} />
      <p>{name}</p>
    </div>
  );
};

export default Character;
