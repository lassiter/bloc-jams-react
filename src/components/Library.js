import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import albumData from './../data/albums';
import {Row, Col} from 'reactstrap';


class Library extends Component {
  constructor(props) {
  super(props);
  this.state = { albums: albumData };
}

  render() {
   return (
     <section className='library'>
     {
       this.state.albums.map( (album, index) =>
         <Link className="row" to={`/album/${album.slug}`} key={index} >
          <Col xs="6" tag="img" src={album.albumCover} alt={album.title} />
          <Col xs="6" className="album-details">
            <h1 className="album-title">{album.title}</h1>
            <h2 className="artist">{album.artist}</h2>
            <div className="release-info">{album.songs.length} songs</div>
          </Col>
         </Link>
       )
     }
     </section>
    );
  }
}

export default Library;
