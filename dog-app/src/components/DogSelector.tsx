import React, { useEffect, useState } from "react";
import { DogBreed } from "../types/dog-types";

const styles = {
  wrapper: {
    width: "40%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    display: "flex",
    "flex-direction": "column",
    alignItems: "center",
    backgroundColor: "#fbfbfb",
    width: "80%",
    height: "80%",
    borderRadius: "10px",
  },
  title: {
    fontSize: "30px",
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
    "user-select": "none",
    outline: "none",
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
    <div style={styles.wrapper}>
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
    </div>
  );
};

export default DogSelector;
