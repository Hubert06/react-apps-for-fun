import { ReplayRounded } from "@material-ui/icons";
import React, { useEffect, useState } from "react";

const styles = {
  wrapper: {
    width: "60%",
    height: "100%",
  },
  container: {
    display: "flex",
    "flex-direction": "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
  },
  image: {
    height: "70%",
    borderRadius: "10px",
    border: "10px solid #45526c",
  },
  button: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    marginTop: "20px",
    width: "200px",
    height: "40px",
    backgroundColor: "#f8a488",
    color: "#45526c",
    borderRadius: "10px",
    border: "2px solid #45526c",
    "font-weight": "bold",
    fontFamily: "'Quicksand', sans-serif",
  },
  icon: {
    marginLeft: "10px",
  },
};

interface DogCarouselProps {
  image: string;
  onRefreshImage: () => void;
}

const DogCarousel = ({ image, onRefreshImage }: DogCarouselProps) => {
  const [dogImage, setDogImage] = useState<string>("");

  useEffect(() => {
    setDogImage(image);
  }, [image]);

  return (
    <div style={styles.wrapper}>
      <div style={styles.container}>
        {dogImage ? (
          <img style={styles.image} src={dogImage} alt="Invalid." />
        ) : (
          <div>No breed selected!!!</div>
        )}
        <button style={styles.button} onClick={onRefreshImage}>
          New image
          <ReplayRounded style={styles.icon} />
        </button>
      </div>
    </div>
  );
};

export default DogCarousel;
