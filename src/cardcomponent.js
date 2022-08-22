import Axios from "axios";
import "./APP2.css";
import { Fragment, useEffect, useState } from "react";
const Listdata = () => {
  const [music, setMusic] = useState([]);
  useEffect(() => {
    gettingdata();
  }, []);
  const gettingdata = async () => {
    await Axios.get("http://localhost:4000/music").then((res) => {
      setMusic(res.data);
    });
  };
  return (
    <Fragment>
      <div className="container"></div>
      <div className="data">
        <h1>Playlist</h1>
        {music.map((value, index) => {
          return (
            <ul>
              <li>
                <span className="card_title">{`${value.songname}`}</span>
              </li>

              <span className="card_author">{`By:${value.artist}`}</span>
            </ul>
          );
        })}
      </div>
    </Fragment>
  );
};

export default Listdata;
