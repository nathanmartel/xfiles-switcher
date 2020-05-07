import React from 'react';
import { fetchCharacters } from '../../services/services';
import Gallery from '../Gallery/Gallery';

const XFilesFolks = () => {

  const characters = fetchCharacters();

  return (
    <Gallery characters={characters} />
  );
};

export default XFilesFolks;
