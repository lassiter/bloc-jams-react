import React, { Component } from 'react';
import './PlayerBar.css';
import {Row, Col} from 'reactstrap';

class PlayerBar extends Component {
  render() {
    return (
      <section className="player-bar container-fluid">
        <Row tag="section" id="buttons">
          <Col xs="1" tag="button" id="previous" onClick={this.props.handlePrevClick}>
            <span className="ion-skip-backward"></span>
          </Col>
          <Col xs="1" tag="button" id="play-pause" onClick={this.props.handleSongClick}>
            <span className={this.props.isPlaying ? 'ion-pause' : 'ion-play'}></span>
          </Col>
          <Col xs="1" tag="button" id="next" onClick={this.props.handleNextClick}>
            <span className="ion-skip-forward"></span>
          </Col>
        </Row>
        <Row>
          <section id="time-control">
            <div className="current-time">{this.props.formatTime(this.props.currentTime)}</div>
            <input
              type="range"
              className="seek-bar"
              value={(this.props.currentTime / this.props.duration) || 0}
              max="1"
              min="0"
              step="0.01"
              onChange={this.props.handleTimeChange}
            />
            <div className="total-time">{this.props.formatTime(this.props.duration)}</div>
          </section>
          <section id="volume-control">
            <div className="icon ion-volume-low"></div>
            <input
            type="range"
            className="seek-bar"
            max="1"
            min="0"
            step="0.1"
            value={this.props.volume}
            onChange={this.props.handleVolChange}
             />
            <div className="icon ion-volume-high"></div>
          </section>
        </Row>
      </section>
    );
  }
}

export default PlayerBar;
