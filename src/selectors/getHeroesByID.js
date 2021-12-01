import heroes from "../data/heroes";

const getHeroesByID = (id) => {
  return heroes.find((hero) => hero.id === id);
};
export default getHeroesByID;
