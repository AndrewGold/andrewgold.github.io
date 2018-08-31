import React, { Component } from 'react';
import async from 'async'

import Event from './Event'

const mock = [
  {
    name: 'Event Name',
    description: 'hey this si our even its super cool wooooo', // put max on this
    location: 'SF, CA',
    date: '09.01.2018',
    price: 1,
    maxTickets: 20
  }
];

class Events extends Component {
  constructor(props) {
    super(props)
    this.state = {
      events: []
    }
  }

  componentWillMount() {
    const { eventContract } = this.props
    eventContract.getEvents((err, data) => {
      async.map(data, eventContract.tokenURI, (err, events) => {
        this.setState({ events: mock })
      })
    });
  }

  renderEvents() {
    return <div>{this.state.events.map((e,i) => <Event key={i} {...e} />)}</div>;
  }

  render() {
    return (
      <div className="view events-view">
        <div className="title">events <span className="count">{this.state.events.length}</span></div>
        {this.state.events.length > 0 ? this.renderEvents() : <div>No events.</div>}
        <div className="bottom">
          <button onClick={() => this.props.history.push('/create')} className="main-button">create new event</button>
        </div>
      </div>
    );
  }
}

export default Events;
