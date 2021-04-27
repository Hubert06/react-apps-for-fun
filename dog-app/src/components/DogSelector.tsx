import React, { useEffect, useState } from "react";
import { DogBreed } from "../types/dog-types";

const styles = {
  container: {
    marginTop: "20px",
    display: "flex",
    alignItems: "center",
  },
  title: {
    fontSize: "30px",
    marginRight: "20px",
    fontFamily: "'Quicksand', sans-serif",
    "font-weight": "bold",
  },
  select: {
    cursor: "pointer",
    backgroundColor: "#f8f5f1",
    border: "none",
    borderRadius: "5px",
    width: "200px",
    height: "40px",
    fontFamily: "'Quicksand', sans-serif",
    "font-weight": "bold",
  },
};

interface DogSelectorProps {
  breeds: DogBreed[];
  onSelect: (breed: string) => void;
}

const DogSelector = ({ breeds, onSelect }: DogSelectorProps) => {
  const [dogBreeds, setDogBreeds] = useState<DogBreed[]>([]);

  useEffect(() => {
    setDogBreeds(breeds);
  }, [breeds]);

  return (
    <div style={styles.container}>
      <div style={styles.title}>Choose a dog breed: </div>
      <select
        style={styles.select}
        name="breeds"
        id="breeds-select"
        onChange={(e) => onSelect(e.target.value)}
      >
        {dogBreeds.map((breed) => {
          return (
            <option key={breed.value} value={breed.value}>
              {breed.name}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default DogSelector;
