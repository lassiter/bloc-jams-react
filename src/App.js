import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css'
import { Container, Row, Col, Nav, NavItem, NavLink } from 'reactstrap';
import Landing from './components/Landing';
import Library from './components/Library';
import Album from './components/Album';

class App extends Component {
  render() {
    return (
      <Container>
        <div className="App">
        <Row tag="header" className="container-fluid">
          <Col>
            <img alt="Bloc Jams" src="/assets/images/bloc_jams_logo.png" />
          </Col>
          <Col>
            <Nav tag="nav" className="nav-links">
              <NavItem>
                <NavLink tag={Link} to='/'>Landing</NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} to='/library'>Library</NavLink>
              </NavItem>
            </Nav>
          </Col>
        </Row>
        <Row tag="main">
            <Route exact path="/" component={Landing} />
            <Route path="/library" component={Library} />
            <Route path="/album/:slug" component={Album} />
        </Row>
        </div>
      </Container>
    );
  }
}

export default App;
