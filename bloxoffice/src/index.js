import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import eventFactoryABI from './EventFactory';
import ticketFactoryABI from './TicketFactory';
import async from 'async';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const web3 = window.web3
const Web3 = window.Web3
let web3js

window.addEventListener('load', function() {

  // Checking if Web3 has been injected by the browser (Mist/MetaMask)
  if (typeof web3 !== 'undefined') {
    // Use Mist/MetaMask's provider
    web3js = new Web3(web3.currentProvider);
  } else {
    // Handle the case where the user doesn't have Metamask installed
    // Probably show them a message prompting them to install Metamask
  }

  const eventFactoryAddress = "0x84788730332b604327bbd64128de8fe4fa28237c";
  const eventFactory = web3js.eth.contract(eventFactoryABI);
  const eventInstance = eventFactory.at(eventFactoryAddress)

  const ticketFactoryAddress = "0xc458bfd33fc40aee2405fa73584c478a128904b6";
  const ticketFactory = web3js.eth.contract(ticketFactoryABI);
  const ticketInstance = ticketFactory.at(ticketFactoryAddress);

  ReactDOM.render(
    <Router>
      <App eventContract={eventInstance} ticketContract={ticketInstance} />
    </Router>
  , document.getElementById('root'));
  registerServiceWorker();

})
