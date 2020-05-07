import React from 'react';
import PropTypes from 'prop-types';

const Gallery = ({ characters }) => {
  
  const characterElements = () => characters.map((character, index) => (
    <li key={index}>
      <h3>{character.name}</h3>
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
