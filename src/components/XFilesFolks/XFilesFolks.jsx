import React from 'react';
import { useCharacters } from '../services/services';
import Gallery from '../Gallery/Gallery';

const XFilesFolks = () => {

  const characters = useCharacters();

  return (
    <Gallery characters={characters} />
  );
};

export default XFilesFolks;
