import React, { Component } from 'react';
import albumData from './../data/albums';
import { Table, Row, Col } from 'reactstrap';
import SongItem from './SongItem'

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
                songIndex={index}
                key={index}
                songNumber={index+1}
                song = {song}
                isPlaying={this.props.isPlaying}
                selected={this.props.currentSong === song}
                formatTime={(t) => this.props.formatTime(t)}
                handleSongClick={() => this.props.handleSongClick(song)}
              />
          )}
          </tbody>
        </Table>
    );
  }
}
export default SongList;
