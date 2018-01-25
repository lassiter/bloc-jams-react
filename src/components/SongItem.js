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
 // song-number, ion-play, ion-pause
  render() {
    let isHovered = this.state.isHovered;
    let isPlaying = this.props.isPlaying;
    let currentSong = this.props.currentSong;

    // let button = null;
    // if (isHovered && !isPlaying) {
    //   button = <IonPlay />;
    // }
    // else if (isPlaying) {
    //   button = <IonPause />;
    // } else { button = <SongNumber />;}
    return (
            <tr className="song" key={index} onClick={() => this.props.handleSongClick(song)}>
              <td>
                {this.song.index}
              </td>
              <td>{this.song.title}</td>
              <td>{this.props.formatTime(song.duration)}</td>
            </tr>
    );
  }
}
//
// function SongNumber(props){
//   let index = null;
//   return (
//     <td>
//     <button>
//       <span className="song-number"> {index + 1}</span>
//     </button>
//   </td>
//   );
// }
//
// function IonPause(props){
//   return (
//     <button>
//       <span className="ion-pause"></span>
//     </button>
//   );
// }
//
// function IonPlay(props){
//   return (
//     <button>
//       <span className="ion-play"></span>
//     </button>
//   );
// }
export default SongItem;
