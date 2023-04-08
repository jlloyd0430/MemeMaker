import React, { useState } from "react";
// import "./styles.css";
import "./home.css";

function Home() {
  const [image, setImage] = useState(null);
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "",
  });
  const [editedImage, setEditedImage] = useState("");

  function handleChange(event) {
    const { name, value, checked, type } = event.target;
    setMeme((prevMeme) => {
      return {
        ...prevMeme,
        [name]: type === "checkbox" ? checked : parseInt(value), // Ensured that values are integers
      };
    });
  }

  const handleUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleClick = () => {
    const randomImage = Math.floor(Math.random() * 46) + 1;
    setImage(`./personal-images/meme${randomImage}.JPG`);
  };

  const handleDownload = () => {
    const link = document.createElement("a");
    link.download = "meme.jpg";
    link.href = image;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="App">
      <p className="welcome">
        Welcome to the home page of the Galactic Meme dashboard! peep our
        library of NFT/non-NFT related memes, upload, edit, post and download
        your memes or others here.{" "}
      </p>
      <button className="Btn" onClick={handleClick}>
        Generate
      </button>
      <button className="Btn" onClick={handleDownload}>
        Download
      </button>
      <header className="App-header">
        {image ? (
          <>
            <img src={image} className="img" alt="random meme" />
          </>
        ) : (
          <p className="meme-input"></p>
        )}
      </header>
    </div>
  );
}

export default Home;
