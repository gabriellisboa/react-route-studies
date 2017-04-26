import React from 'react';
import { render } from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';
import App from './modules/App';
import About from './modules/About';
import Repos from './modules/Repos';
import Repo from './modules/Repo';

render((
  <Router history={hashHistory}>
    <Route path="/" component={App}>
    
       {/* Repos list page */}
      <Route path="/repos" component={Repos}/>

      {/* Repo specific page */}
      <Route path="/repos/:userName/:repoName" component={Repo}/>

      {/* About page */}
      <Route path="/about" component={About}/>
    </Route>
  </Router>
), document.getElementById('app'));