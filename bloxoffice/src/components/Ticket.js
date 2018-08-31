import React, { Component } from 'react';

class Ticket extends Component {
  render() {
    const { name, description, location, date, price, maxTickets } = this.props
    return (
      <div className="ticket">
        i am a ticket ama
      </div>
    );
  }
}

export default Ticket;
