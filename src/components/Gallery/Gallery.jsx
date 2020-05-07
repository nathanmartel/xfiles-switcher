import React from 'react';
import PropTypes from 'prop-types';

const Gallery = ({ characters }) => {
  
  const characterElements = characters.map((character, index) => (
    <li key={index}>
      <img src={character.image} alt={character.name}/>
      <h3>{character.name}</h3>
      <p>{character.description}</p>
    </li>
  ));
  
  return (
    <ul>
      {characterElements}
    </ul>   
  );
};

Gallery.propTypes = {
  characters: PropTypes.array.isRequired
};

export default Gallery;
