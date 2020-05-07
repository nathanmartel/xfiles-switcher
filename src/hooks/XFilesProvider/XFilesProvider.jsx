import React, { createContext, useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import { fetchCharacters } from '../../services/services';

export const CharacterContext = createContext();

export const XFilesProvider = ({ children }) => {
  const [category, setCategory] = useState('Main_characters');
  const [characters, setCharacters] = useState([]);
  const [resultsLength, setResultsLength] = useState(0);
  const [page, setPage] = useState(1);
  const [perPage] = useState(8);

  const handleSwitcherChange = ({ target }) => {
    if(target.checked) setCategory('Main_characters');
    if(!target.checked) setCategory('Monster_of_the_Week');
  };

  const handlePage = (increment) => {
    setPage(page + increment);
  };

  useEffect(() => {
    fetchCharacters(category, page, perPage)
      .then(data => {
        setCharacters(data);
        setResultsLength(data.length);
      }); 
  }, [category, page]);

  return (
    <CharacterContext.Provider value={{ 
      characters, 
      handleSwitcherChange, 
      category, 
      page, 
      perPage, 
      resultsLength, 
      handlePage 
    }}>
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

export const usePage = () => {
  const { page } = useContext(CharacterContext);
  return page;
};

export const usePerPage = () => {
  const { perPage } = useContext(CharacterContext);
  return perPage;
};

export const useSetPage = () => {
  const { setPage } = useContext(CharacterContext);
  return setPage;
};

export const useResultsLength = () => {
  const { resultsLength } = useContext(CharacterContext);
  return resultsLength;
};

export const useHandlePage = () => {
  const { handlePage } = useContext(CharacterContext);
  return handlePage;
};
