// static array
const songsReducer = () => {
  return [
    { title: "No Scrubs", duration: "04:05" },
    { title: "Macarena", duration: "02:30" },
    { title: "All Star", duration: "03:15" },
    { title: "Everybody", duration: "01:45" },
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }
  return selectedSong;
};
