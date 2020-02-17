import React from 'react';
import Dashboard from './components/Dashboard';
import { Route, Switch } from 'react-router-dom';

export const App = () => {
  return (
    <Switch>
      <Route component={Dashboard} path="/dashboard" />
    </Switch>
  );
};
