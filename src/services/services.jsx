export const fetchCharacters = (category, page = 1, perPage = 10) => {
  console.log('fetching');
  return fetch(`https://xfiles-api.herokuapp.com/api/v1/characters?category=${category}&perPage=${perPage}&page=${page}`)
    .then(res => res.json());
};

export const fetchAllCharacters = (category) => {
  console.log('fetching all');
  return fetch(`https://xfiles-api.herokuapp.com/api/v1/characters?category=${category}`)
    .then(res => res.json());
};
