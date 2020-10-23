import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Home } from './pages';

export default function APPRouter() {
  return (
    <Router>
      <Switch>
        <Route path='/' component={Home} />
      </Switch>
    </Router>
  );
}
