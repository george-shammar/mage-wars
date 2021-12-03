import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './Home';
import MintHero from './MintHero';
import RevealHero from './RevealHero';


const Routes = () => (
  <BrowserRouter>
    <div className="route">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/MintHero" component={MintHero} />
        <Route exact path="/RevealHero" component={RevealHero} />
      </Switch>
    </div>
  </BrowserRouter>

);

export default Routes;
