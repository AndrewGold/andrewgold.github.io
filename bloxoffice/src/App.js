import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Link } from 'react-router-dom';

import Tickets from './components/Tickets';
import Events from './components/Events';
import Event from './components/Event';
import Ticket from './components/Ticket';
import Create from './components/Create';
import Receipt from './components/Receipt';

class App extends Component {
  render() {
    const { eventContract, ticketContract } = this.props
    return (
      <div className="App">
        <div className="header">
          <marquee>
            bloxofficebloxofficebloxofficebloxoffice 
          </marquee>
        </div>
        <Route exact path="/" render={() => <Tickets eventContract={eventContract} /> } />
        <Route path="/tickets" render={() => <Tickets ticketContract={ticketContract} /> } />
        <Route path="/events" render={({ history }) => <Events history={history} eventContract={eventContract} /> } />
        <Route path="/create" render={() => <Create eventContract={eventContract} /> } />
        <Route path="/tickets/:id" render={() => <Ticket eventContract={eventContract} /> } />
        <Route path="/events/:id" render={() => <Event eventContract={eventContract} /> } />
      </div>
    );
  }
}

export default App;
