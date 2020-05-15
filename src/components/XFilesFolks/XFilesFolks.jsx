import React from 'react';
import Gallery from '../Gallery/Gallery';
import { useCharacters } from '../../hooks/XFilesProvider/XFilesProvider';


const XFilesFolks = () => {

  const characters = useCharacters();

  return (
    <>
      <Gallery characters={characters} />
    </>
  );
};

export default XFilesFolks;
