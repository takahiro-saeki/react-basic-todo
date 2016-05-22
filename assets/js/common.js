import React from 'react';
import ReactDOM from 'react-dom';
import Index from './page/index';
import Create from './page/create';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { Router, Route, IndexRoute, Link, IndexLink, browserHistory } from 'react-router';
injectTapEventPlugin();
document.body.style.margin = 0;

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/template" component={Create} />
    <Route path="/template/test" component={Create} />
  </Router>
  ),
  document.getElementById('app')
)
