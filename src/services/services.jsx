export const fetchCharacters = (category, page = 1, perPage = 10) => {
  console.log('fetching');
  return fetch(`https://xfiles-api.herokuapp.com/api/v1/characters?category=${category}&perPage=${perPage}&page=${page}`)
    .then(res => res.json())
    .then(data => data.results);
};
