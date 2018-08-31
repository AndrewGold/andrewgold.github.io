import React, { Component } from 'react';

class Event extends Component {
  render() {
    const { name, description, location, date, price, maxTickets } = this.props
    return (
      <div className="event">
        <div>
          <span className="name">{name}</span>
          <span className="deets" style={{ float: 'right' }}>{maxTickets} Tix @ ${price}</span>
        </div>
        <br/>
        <p className="description">{description}</p>
        <div>
          <span className="name">{date}</span>
          <span className="deets" style={{ float: 'right' }}>{location}</span>
        </div>
      </div>
    );
  }
}

export default Event;

