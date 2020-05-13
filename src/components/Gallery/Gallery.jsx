import React from 'react';
import PropTypes from 'prop-types';
import { useCategory } from '../../hooks/XFilesProvider/XFilesProvider';
import styles from './gallery.css'; 

const Gallery = ({ characters }) => {

  const category = useCategory();

  const characterElements = characters.map((character, index) => (
    <li key={index} className={styles.category}>
      <img src={character.image} alt={character.name}/>
      <h3>{character.name}</h3>
      <p>{character.description}</p>
    </li>
  ));
  
  return (
    <ul className={styles[`${category}`]}>
      {characterElements}
    </ul>   
  );
};

Gallery.propTypes = {
  characters: PropTypes.array.isRequired
};

export default Gallery;
