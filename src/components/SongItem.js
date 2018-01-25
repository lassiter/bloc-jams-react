import React, { Component } from 'react';
import albumData from './../data/albums';
import { Table, Row, Col } from 'reactstrap';

class SongItem extends Component {
  constructor(props) {
  super(props);
    this.state = {
      isHovered: false
    };
    this.handleHover = this.handleHover.bind(this);
  }
  handleHover(){
    this.setState({
        isHovered: !this.state.isHovered
    });
  }
  render() {

    let isHovered = this.state.isHovered;
    let isPlaying = this.props.isPlaying;
    let currentSong = this.props.currentSong;
    let isSelected = this.props.selected;

    let song = null;
    let button = null;
    if (isHovered && !isPlaying && !isSelected || isHovered && isPlaying && !isSelected || isHovered && !isPlaying && isSelected) {
      button = <IonPlay />;
    }
    else if (isPlaying && this.props.selected) {
      button = <IonPause />;
    } else { button = <SongNumber songNumber = {this.props.songNumber}/>;}
              console.log(this.props)
    return (
        <tr className="song" key={this.props.songIndex} onClick={() => this.props.handleSongClick()}>
          <td onMouseEnter={this.handleHover} onMouseLeave={this.handleHover}>
            {button}
          </td>
          <td>{this.props.song.title}</td>
          <td>{this.props.formatTime(this.props.song.duration)}</td>
        </tr>
    );
  }
}

class SongNumber extends Component {
  constructor(props) {
  super(props);
  }
  render() {
  return (
      <button>
        <span className="song-number"> {this.props.songNumber}</span>
      </button>
    );
  }
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
export default SongItem;
