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
    <div className="ui card">
      {/* <h3>Selected track</h3> */}
      <div className="content">
        <div className="header">{song.title}</div>
      </div>
      <div className="content">
        <h4 className="ui sub header">{song.artist}</h4>
        <p>
          <br />
          ⌚︎ Duration: {song.duration}
        </p>
        <p>
          <a className="ui inverted button violet " href={song.video} target="_blank" rel="noreferrer">
            Watch Video
          </a>
        </p>
      </div>
    </div>
  );
};

// data från state to connect:
const mapStateToProps = (state) => {
  // console.log(state);
  return { song: state.selectedSong };
};

export default connect(mapStateToProps)(SongDetail);
