import React from "react";
//import memeData from "./memesData";

export default function Form() {
  const [allMemeData, setMemeAllImages] = React.useState({});
  const [imgState, setImageState] = React.useState(false);
  /*   const [url, setImage] = React.useState("");
   */ const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "",
  });

  React.useEffect(() => {
    async function getMemesApi() {
      const response = await fetch("https://api.imgflip.com/get_memes");
      const data = await response.json();
      setMemeAllImages(data);
    }
    getMemesApi();
  }, []);

  function handleChange(event) {
    const { name, value, checked, type } = event.target;
    setMeme((prevMeme) => {
      return {
        ...prevMeme,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }

  function topStyle() {
    if (meme.changePosition)
      return {
        left: meme.topTextX + "%",
        top: meme.topTextY + "%",
      };
    else
      return {
        left: "50%",
        top: "5%",
      };
  }

  function botStyle() {
    if (meme.changePosition)
      return {
        left: meme.bottomTextX + "%",
        top: meme.bottomTextY + "%",
      };
    else
      return {
        left: "50%",
        top: "85%",
      };
  }

  function imghandle(event) {
    let url = "";
    if (event.target.files.length !== 0) {
      url = URL.createObjectURL(event.target.files[0]);
    }
    // url = URL.createObjectURL(event.target.files[0]);

    if (url !== "") {
      setImageState(true);
      setMeme({
        ...meme,
        randomImage: url,
      });
    }
  }
  function handleClick() {
    const memesArray = allMemeData.data.memes;
    const randomIndex = Math.floor(Math.random() * memesArray.length);
    const imgUrl = memesArray[randomIndex].url;
    setImageState(true);
    setMeme({
      ...meme,
      randomImage: imgUrl,
    });
  }

  // function handleChange(event) {
  //   const { name, value } = event.target;
  //   setMeme({
  //     ...meme,
  //     [name]: value
  //   });
  // }

  return (
    <div className="main-container">
      <div className="form-class">
        <div
          className="form"
          style={
            meme.changePosition
              ? { gridTemplate: "40px 20px 5px 20px 5px 20px 40px/ 1fr 1fr" }
              : { gridTemplate: "40px 20px 40px/ 1fr 1fr" }
          }
        >
          <div className="form--checkbox">
            <input
              type="checkbox"
              id="position"
              name="changePosition"
              checked={meme.changePosition}
              onChange={handleChange}
            />
            <label htmlFor="position">Change text position</label>
          </div>
          {meme.changePosition && <span>Top text X: {meme.topTextX}</span>}
          {meme.changePosition && <span>Top text Y: {meme.topTextY}</span>}
          {meme.changePosition && (
            <input
              type="range"
              min="1"
              max="100"
              name="topTextX"
              value={meme.topTextX}
              onChange={handleChange}
            />
          )}
          {meme.changePosition && (
            <input
              type="range"
              min="1"
              max="100"
              name="topTextY"
              value={meme.topTextY}
              onChange={handleChange}
            />
          )}
          {meme.changePosition && (
            <span>Bottom text X: {meme.bottomTextX}</span>
          )}
          {meme.changePosition && (
            <span>Bottom text Y: {meme.bottomTextY}</span>
          )}
          {meme.changePosition && (
            <input
              type="range"
              min="1"
              max="100"
              name="bottomTextX"
              value={meme.bottomTextX}
              onChange={handleChange}
            />
          )}
          {meme.changePosition && (
            <input
              type="range"
              min="1"
              max="100"
              name="bottomTextY"
              value={meme.bottomTextY}
              onChange={handleChange}
            />
          )}
          <div className="input-container">
            <input
              type="text"
              className="input-text"
              onChange={handleChange}
              name="topText"
              value={meme.topText}
              placeholder="Enter top text"
            />
            <input
              type="text"
              className="input-text"
              onChange={handleChange}
              name="bottomText"
              value={meme.bottomText}
              placeholder="Enter bottom text"
            />
          </div>
          <button className="btn" onClick={handleClick}>
            Get a new random meme
          </button>
          <p className="upload-meme">Upload your own meme</p>
          <input
            type="file"
            name="uploadedImage"
            className="file"
            onChange={imghandle}
          />
        </div>
      </div>
      {/* <div className="meme" style={{ display: imgState ? "block" : "none" }}>
        <img src={meme.randomImage} className="meme--img" alt="meme" />
        <h2 className="meme--text top">{meme.topText}</h2>
        <h2 className="meme--text bottom">{meme.bottomText}</h2>
      </div> */}

      <div className="meme" style={{ display: imgState ? "block" : "none" }}>
        <img src={meme.randomImage} alt="memeImg" className="meme--image" />
        <h2 className="meme--text" style={topStyle()}>
          {meme.topText}
        </h2>
        <h2 className="meme--text" style={botStyle()}>
          {meme.bottomText}
        </h2>
      </div>
    </div>
  );
}

/*
    if (url !== "") {
      setMeme({
        topText: "",
        bottomText: "",
        randomImage: url
      });
      return;
    }
   */
