import "./APP2.css";
import { useEffect, useState, useRef } from "react";
import Axios from "axios";
const Player = () => {
  const [playpause, setPlayPause] = useState(false);
  const [image, setImage] = useState("");
  var [song, setSong] = useState("");
  var [title, setTitle] = useState("");
  var [artist, setArtist] = useState("");
  var [i, setI] = useState(0);
  const [list_songs, setListSongs] = useState();
  const audioplayer = useRef();
  const toggleplaystate = () => {
    const prevstate = playpause;
    setPlayPause(!prevstate);
    if (!playpause) {
      audioplayer.current.play();
    } else {
      audioplayer.current.pause();
    }
  };
  const gotonext = () => {
    setI(i + 1);
    songsetting();
    if (playpause == true) toggleplaystate();
  };
  const gotoprevious = () => {
    setI(i - 1);
    songsetting();
    if (playpause == true) toggleplaystate();
  };
  useEffect(() => {
    songsetting();
  }, [i]);
  const songsetting = async () => {
    var songname = await Axios.get("http://localhost:4000/music");
    setSong(songname.data[i].url);
    setImage(songname.data[i].image);
    setArtist(songname.data[i].artist);
    setTitle(songname.data[i].songname);
  };
  return (
    <div id="musicplayer">
      <p>Song:{`${title}`}</p>
      <p>By:{`${artist}`}</p>
      <div className="card__header">
        <img className="player_image" src={`${image}`} alt="Nothing"></img>
      </div>
      <audio src={`${song}`} ref={audioplayer} />
      <div className="controls">
        <button onClick={gotoprevious} className="btn backward-btn">
          Back
        </button>
        <button onClick={toggleplaystate} className="play-btn pause">
          <span></span>
          <span></span>
        </button>
        <button onClick={gotonext} className="btn forward-btn">
          Next
        </button>
      </div>
    </div>
  );
};

export default Player;
