import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import Home from './layout/home/home';
import ButtonSandbox from './components/button/Sandbox';
import ButtonGroupSandbox from './components/buttonGroup/Sandbox';
import Icon from './components/icon/Sandbox';
import Image from './components/image/Sandbox';
import Chip from './components/chip/Sandbox';
import Badge from './components/badge/Sandbox';
import ListGroup from './components/list-group/Sandbox';
import Input from './components/input/Sandbox'

ReactDOM.render((
  <BrowserRouter>
    <App>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/button" component={ButtonSandbox} />
        <Route path="/button-group" component={ButtonGroupSandbox} />
        <Route path="/icon" component={Icon} />
        <Route path="/image" component={Image} />
        <Route path="/chip" component={Chip} />
        <Route path="/badge" component={Badge} />
        <Route path="/list-group" component={ListGroup} />
        <Route path="/input" component={Input} />
      </Switch>
    </App>
  </BrowserRouter>
), document.getElementById('root'));
registerServiceWorker();
