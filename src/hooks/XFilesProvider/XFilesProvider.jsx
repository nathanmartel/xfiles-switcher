import React, { createContext, useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import { fetchCharacters } from '../../services/services';

export const CharacterContext = createContext();

export const XFilesProvider = ({ children }) => {
  
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetchCharacters()
      .then(data => { 
        console.log('Character data is', data); 
        setCharacters(data); 
      });
  }, []);

  return (
    <CharacterContext.Provider value={characters}>
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
