import React from 'react';
import PropTypes from 'prop-types';

const Gallery = ({ characters }) => {
  
  const characterElements = characters.map((character, index) => (
    <li key={index}>
      <h3>{character.name}</h3>
    </li>
  ));
  
  return (
    <ul>
      { console.log('characters passed to gallery is', characters) }
      {characterElements}
    </ul>   
  );
};

Gallery.propTypes = {
  characters: PropTypes.array.isRequired
};

export default Gallery;
