import "./App.css";
import React, { useEffect, useState } from "react";
import { DogBreed } from "./types/dog-types";
import { fetchDogBreeds, fetchRandomDogImage } from "./api/dog-api";
import DogCarousel from "./components/DogCarousel";
import DogSelector from "./components/DogSelector";

const App = () => {
  const [dogBreeds, setDogBreeds] = useState<DogBreed[]>([]);
  const [selectedBreed, setSelectedBreed] = useState<string>("");
  const [dogImage, setDogImage] = useState<string>("");

  useEffect(() => {
    const fetchData = async () => {
      const breeds = await fetchDogBreeds();
      selectBreed(breeds[0].value);
      setDogBreeds(breeds);
    };

    fetchData();
  }, []);

  const onBreedSelect = async (breed: string) => {
    selectBreed(breed);
  };

  const selectBreed = async (breed: string) => {
    const randomDogImage = await fetchRandomDogImage(breed);
    setDogImage(randomDogImage);
    setSelectedBreed(breed);
  };

  const onRefreshImage = async () => {
    const randomDogImage = await fetchRandomDogImage(selectedBreed);
    setDogImage(randomDogImage);
  };

  return (
    <div className="App">
      <DogSelector breeds={dogBreeds} onSelect={onBreedSelect} />
      <DogCarousel image={dogImage} onRefreshImage={onRefreshImage} />
    </div>
  );
};

export default App;
