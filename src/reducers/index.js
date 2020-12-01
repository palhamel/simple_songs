import { combineReducers } from "redux";

// static array
const songsReducer = () => {
  return [
    {
      title: "No Scrubs",
      artist: "TLC",
      duration: "04:05",
      video: "https://youtu.be/FrLequ6dUdM",
    },
    {
      title: "Macarena",
      artist: "Los Del Rio",
      duration: "02:30",
      video: "https://youtu.be/MMRVbhbIkjk",
    },
    {
      title: "All Star",
      artist: "Smash Mouth",
      duration: "03:15",
      video: "https://youtu.be/L_jWHffIx5E",
    },
    {
      title: "Everybody",
      artist: "Backstreet Boys",
      duration: "01:45",
      video: "https://youtu.be/6M6samPEMpM",
    },
    // { title: "Everybody", duration: "01:45", video: "https://www.youtube.com/watch?v=6M6samPEMpM"  },
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }
  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer,
});
