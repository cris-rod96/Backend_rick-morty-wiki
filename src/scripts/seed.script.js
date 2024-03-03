import axios from "axios";
import { Character } from "../database/index.database.js";
const loader = async () => {
  try {
    const charactersDB = await Character.count({});
    if (charactersDB < 826) {
      let url = "https://rickandmortyapi.com/api/character";
      do {
        const { data } = await axios(url);
        const { info, results } = data;
        const characters = results.map((character) => ({
          name: character.name,
          image: character.image,
          gender: character.gender,
          status: character.status,
          species: character.species,
          origin: character.origin.name,
          location: character.location.name,
        }));
        await Character.bulkCreate(characters);
        url = info.next;
      } while (url);
    }
  } catch (error) {
    console.log("Hubo un error en la carga inicial de los datos");
  }
};

export default loader;
