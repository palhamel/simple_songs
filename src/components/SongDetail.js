import React from "react";
import { connect } from "react-redux";

// component magic:

const SongDetail = ({ song }) => {
  // console.log('in SongDetail component:', props.song.title);
  console.log(song);
  // check empty state:
  if (!song) {
    return <div>Please select a song 🎧</div>;
  }

  return (
    <div>
      <h3>Selected track</h3>
      <p>
        ● Title: {song.title}
        <br />
        ⌚︎ Duration: {song.duration}
      </p>
      <p>Link: </p>
    </div>
  );
};

// data från state to connect:
const mapStateToProps = (state) => {
  // console.log(state);
  return { song: state.selectedSong };
};

export default connect(mapStateToProps)(SongDetail);
