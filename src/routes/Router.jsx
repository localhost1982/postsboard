import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { routes } from './routes';

export const Router = () => (
  <Switch>
    {
      routes.map(({ path, component }) => <Route key={path} exact {...{ path, component }} />)
    }
  </Switch>
);
