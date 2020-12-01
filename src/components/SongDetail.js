import React from "react";
import { connect } from "react-redux";

// component magic:

const SongDetail = (props) => {
  console.log(props);
  return <div>Song details here</div>;
};

// data från state to connect:
const mapStateToProps = (state) => {
  // console.log(state);
  return { song: state.selectedSong };
};

export default connect(mapStateToProps)(SongDetail);

// export default connect(mapStateToProps, { selectSong })(SongList);