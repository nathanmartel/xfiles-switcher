import React, { createContext, useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import { fetchCharacters, fetchAllCharacters } from '../../services/services';

export const CharacterContext = createContext();

export const XFilesProvider = ({ children }) => {
  const main = 'Main_characters';
  const monster = 'Monster_of_the_Week';
  const [category, setCategory] = useState(main);
  const [characters, setCharacters] = useState([]);
  const [resultsLength, setResultsLength] = useState(0);
  const [mainResultsLength, setMainResultsLength] = useState(0);
  const [monsterResultsLength, setMonsterResultsLength] = useState(0);
  const [page, setPage] = useState(1);
  const [mainPage, setMainPage] = useState(1);
  const [monsterPage, setMonsterPage] = useState(1);
  const [perPage] = useState(8);

  // Allow each category to maintain its own number of pages, active page, and results
  // Could also do this by passing props to pagination, but we're experimenting here...
  const handleSwitcherChange = ({ target }) => {
    if(target.checked) {
      setCategory(monster);
      setPage(monsterPage);
      setResultsLength(monsterResultsLength);
    }
    if(!target.checked) {
      setCategory(main);
      setPage(mainPage);
      setResultsLength(mainResultsLength);
    }
  };

  const handlePage = (increment) => {
    setPage(page + increment);
    if(category === main) setMainPage(page + increment);
    if(category === monster) setMonsterPage(page + increment);
  };

  const useFetchResultsLength = () => {
    fetchAllCharacters(category)
      .then(data => {
        setResultsLength(data.quantity); 
        category === main
          ? setMainResultsLength(data.quantity)
          : setMonsterResultsLength(data.quantity);
      });
  };

  useEffect(() => {
    if(resultsLength === 0) useFetchResultsLength();
    fetchCharacters(category, page, perPage)
      .then(data => setCharacters(data.results));
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
