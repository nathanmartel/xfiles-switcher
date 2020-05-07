import React, { createContext, useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import { fetchCharacters } from '../../services/services';

const CharacterContext = createContext();

export const XFilesProvider = ({ children }) => {
  
  const [mainCharacters, setMainCharacters] = useState([]);

  useEffect(() => {
    fetchCharacters()
      .then(data => { 
        console.log('Character data is', data); 
        setMainCharacters(data); });
  }, []);

  return (
    <CharacterContext.Provider value={{ mainCharacters }}>
      {children}
    </CharacterContext.Provider>
  );
};

export const useCharacters = () => {
  const { characters } = useContext(CharacterContext);
  return characters;
};

XFilesProvider.propTypes = {
  children: PropTypes.node
};
