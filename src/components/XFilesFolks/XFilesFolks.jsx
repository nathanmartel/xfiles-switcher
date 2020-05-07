import React, { useContext } from 'react';
import { fetchCharacters } from '../../services/services';
import Gallery from '../Gallery/Gallery';
import { CharacterContext } from '../../hooks/XFilesProvider/XFilesProvider';


const XFilesFolks = () => {

  const characters = useContext(CharacterContext);

  return (
    <>
      {/* { console.log('characters fetched in XFilesFolks is', characters) } */}
      <Gallery characters={characters} />
    </>
  );
};

export default XFilesFolks;
