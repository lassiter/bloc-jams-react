import React, { Component } from 'react';
import albumData from './../data/albums';
import PlayerBar from './PlayerBar';

class Album extends Component {
  constructor(props) {
  super(props);

    const album = albumData.find( album => {
      return album.slug === this.props.match.params.slug
    });

    this.state = {
      album: album,
      currentSong: album.songs[0],
      currentTime: 0,
      duration: album.songs[0].duration,
      volume: .8,
      isPlaying: false
    };
      this.audioElement = document.createElement('audio');
      this.audioElement.src = album.songs[0].audioSrc;
      this.audioElement.volume = 0.8
    }

    play() {
      this.audioElement.play();
      this.setState({ isPlaying: true });
    }

    pause() {
      this.audioElement.pause();
      this.setState({ isPlaying: false });
    }

    componentDidMount() {
      this.eventListeners = {
        timeupdate: e => {
          this.setState({ currentTime: this.audioElement.currentTime });
        },
        durationchange: e => {
          this.setState({ duration: this.audioElement.duration });
        },
        volumeupdate: e => {
          this.setState({ volume: this.audioElement.volume });
        }
      };
      this.audioElement.addEventListener('timeupdate', this.eventListeners.timeupdate);
      this.audioElement.addEventListener('durationchange', this.eventListeners.durationchange);
      this.audioElement.addEventListener('volumeupdate', this.eventListeners.volumeupdate);
    }

    componentWillUnmount() {
      this.audioElement.src = null;
      this.audioElement.removeEventListener('timeupdate', this.eventListeners.timeupdate);
      this.audioElement.removeEventListener('durationchange', this.eventListeners.durationchange);
      this.audioElement.removeEventListener('volumeupdate', this.eventListeners.volumeupdate);
    }

    setSong(song) {
      this.audioElement.src = song.audioSrc;
      this.setState({ currentSong: song });
    }

    handleSongClick(song) {
      const isSameSong = this.state.currentSong === song;
      if (this.state.isPlaying && isSameSong) {
        this.pause();
      } else {
        if (!isSameSong) { this.setSong(song); }
        this.play();
      }
    };
    handlePrevClick(){
      const currentIndex = this.state.album.songs.findIndex(song => this.state.currentSong === song);
      const newIndex = Math.max(0, currentIndex - 1);
      const newSong = this.state.album.songs[newIndex];
      this.setSong(newSong);
      this.play(newSong);
    }
    handleNextClick(){
      const currentIndex = this.state.album.songs.findIndex(song => this.state.currentSong === song);
      const newIndex = Math.min(this.state.album.songs.length, currentIndex + 1);
      const newSong = this.state.album.songs[newIndex];
      if(newIndex >= this.state.album.songs.length) {return}
      this.setSong(newSong);
      this.play(newSong);
    }
    handleTimeChange(e){
      const newTime = this.audioElement.duration * e.target.value;
      this.audioElement.currentTime = newTime;
      this.setState({ currentTime: newTime });
    }
    handleVolChange(e){
      const newVol = e.target.value;
      this.audioElement.volume = newVol;
      this.setState({ volume: newVol })
    }

    formatTime(seconds){
      if(typeof seconds === "number"){
        let s = Math.floor(seconds);
        let m = Math.floor(s/60);
        s -= m*60;

        return m+":"+(s < 10 ? '0'+s : s)
      } else {return "-:--"}
    }

  render() {
    return (
      <section className="album">
        <section id="album-info">
        <img id="album-cover-art" src={this.state.album.albumCover} />
        <div className="album-details">
          <h1 id="album-title">{this.state.album.title}</h1>
          <h2 className="artist">{this.state.album.artist}</h2>
          <div id="release-info">{this.state.album.releaseInfo}</div>
        </div>
        </section>
        <table id="song-list">
         <colgroup>
           <col id="song-number-column" />
           <col id="song-title-column" />
           <col id="song-duration-column" />
          </colgroup>
          <tbody>
          {this.state.album.songs.map((song, index) =>
            <tr className="song" key={index} onClick={() => this.handleSongClick(song)}>
              <td>
                <button>
                  <span className="song-number">{index + 1}</span>
                  <span className="ion-play"></span>
                  <span className="ion-pause"></span>
                </button>
              </td>
              <td>{song.title}</td>
              <td>{this.formatTime(song.duration)}</td>
            </tr>
          )}
          </tbody>
         </table>
         <PlayerBar
          isPlaying={this.state.isPlaying}
          currentSong={this.state.currentSong}
          currentTime={this.audioElement.currentTime}
          duration={this.audioElement.duration}
          volume={this.state.volume}
          formatTime={(t) => this.formatTime(t)}
          handleSongClick={() => this.handleSongClick(this.state.currentSong)}
          handlePrevClick={() => this.handlePrevClick()}
          handleNextClick={() => this.handleNextClick()}
          handleTimeChange={(e) => this.handleTimeChange(e)}
          handleVolChange={(e) => this.handleVolChange(e)}
         />
      </section>
    );
  }
}

export default Album;
