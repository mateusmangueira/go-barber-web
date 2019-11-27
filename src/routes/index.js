import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

// Rotas de Login e Criacao de contas
import SignIn from '~/pages/SignIn';
import SingUp from '~/pages/SingUp';

// Rotas do usuario
import Dashboard from '~/pages/Dashboard';
import Profile from '~/pages/Profile';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/register" component={SingUp} />
      <Route path="/dashboard" component={Dashboard} isPrivate />
      <Route path="/profile" component={Profile} isPrivate />

      <Route path="/" component={() => <h1>ERROR 404 BAD REQUEST</h1>} />
    </Switch>
  );
}
