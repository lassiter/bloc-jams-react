import React, { Component } from 'react';
import albumData from './../data/albums';
import { Table, Row, Col } from 'reactstrap';

class SongList extends Component {
  constructor(props) {
  super(props);
  }
  render() {
    return (
        <Table id="song-list">
          <thead>
            <tr>
              <th id="song-number-column" >#</th>
              <th id="song-title-column">Song</th>
              <th id="song-duration-column">Duration</th>
            </tr>
          </thead>
          <tbody>
          {this.props.album.songs.map((song, index) =>
              <SongItem
                key={index}
                song={this.props.album.song}
                isPlaying={this.props.isPlaying}
                currentSong={this.props.currentSong}
                formatTime={(t) => this.formatTime(t)}
                handleSongClick={() => this.handleSongClick(this.state.currentSong)}
              />
          )}
          </tbody>
        </Table>
    );
  }
}

function SongItem(props){
  let index = null;
  return (<button>{index + 1}</button>);
}

function SongNumber(props){
  let index = null;
  return (
    <button>
      <span className="song-number"> {index + 1}</span>
    </button>
  );
}

function IonPause(props){
  return (
    <button>
      <span className="ion-pause"></span>
    </button>
  );
}

function IonPlay(props){
  return (
    <button>
      <span className="ion-play"></span>
    </button>
  );
}
export default SongList;
