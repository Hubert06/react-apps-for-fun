import axios from "axios";
import { DogBreed } from "../types/dog-types";

const capitalizeFirstLetter = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

const formatDogBreeds = (breeds: any) => {
  let dogBreeds: DogBreed[] = [];
  for (const [breed, types] of Object.entries(breeds)) {
    const dogTypes = types as Array<string>;
    if (types && dogTypes.length > 0) {
      dogTypes.forEach((type: string) => {
        dogBreeds.push({
          name: `${capitalizeFirstLetter(type)} ${capitalizeFirstLetter(
            breed
          )}`,
          value: `${breed}-${type}`,
        });
      });
    } else {
      dogBreeds.push({
        name: capitalizeFirstLetter(breed),
        value: breed,
      });
    }
  }
  return dogBreeds;
};

export const fetchDogBreeds = async () => {
  const res: any = await axios.get("https://dog.ceo/api/breeds/list/all");
  if (!res.data.status) console.log("Could not fetch dog breeds.");
  return formatDogBreeds(res.data.message);
};

export const fetchRandomDogImage = async (breed: string) => {
  const res: any = await axios.get(
    `https://dog.ceo/api/breed/${breed}/images/random`
  );
  if (!res.data.status) console.log("Could not fetch random dog.");
  return res.data.message;
};
