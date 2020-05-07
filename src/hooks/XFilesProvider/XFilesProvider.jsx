import React, { createContext, useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import { fetchCharacters } from '../../services/services';

export const CharacterContext = createContext();

export const XFilesProvider = ({ children }) => {
  const [category, setCategory] = useState('Main_characters');
  const [characters, setCharacters] = useState([]);

  const handleSwitcherChange = ({ target }) => {
    if(target.checked) setCategory('Main_characters');
    if(!target.checked) setCategory('Monster_of_the_Week');
  };

  useEffect(() => {
    fetchCharacters(category)
      .then(data => { 
        console.log('Character data is', data); 
        setCharacters(data); 
      });
  }, [category]);

  return (
    <CharacterContext.Provider value={{ characters, handleSwitcherChange, category }}>
      {children}
    </CharacterContext.Provider>
  );
};

XFilesProvider.propTypes = {
  children: PropTypes.node
};

// These hooks allow other components access to these pieces of state
// Alternately, you can use the variable definition with 'useContext' in other components
export const useCharacters = () => {
  const { characters } = useContext(CharacterContext);
  return characters;
};

export const useCategory = () => {
  const { category } = useContext(CharacterContext);
  return category;
};

export const useSwitch = () => {
  const { handleSwitcherChange } = useContext(CharacterContext);
  return handleSwitcherChange;
};