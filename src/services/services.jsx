export const fetchCharacters = (category, page = 1) => {
  console.log('fetching');
  return fetch(`https://xfiles-api.herokuapp.com/api/v1/characters?category=${category}&perPage=5&page=${page}`)
    .then(res => res.json())
    .then(data => data.results);
};
