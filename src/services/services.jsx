export const fetchCharacters = (page = 1) => {
  return fetch(`https://xfiles-api.herokuapp.com/api/v1/characters?category=Monster_of_the_Week&perPage=5&page=${page}`)
    .then(res => res.json())
    .then(data => data.results);
};
