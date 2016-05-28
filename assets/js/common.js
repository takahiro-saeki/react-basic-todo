import React from 'react';
import ReactDOM from 'react-dom';
//import Main from './component/content';
//react-router
import { RouteTransition } from 'react-router-transition';
import Hoge from './page/hoge';
import Router1 from './page/router1';
import { Router, Route, IndexRoute, Link, IndexLink, browserHistory } from 'react-router';
import Index from './page/index';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();
document.body.style.margin = 0;

const SlideRightDemo = props => (
  <RouteTransitionDemo preset={presets.slideRight} {...props} />
);

ReactDOM.render((
    <Router history={browserHistory}>
    <Route path="template/" component={Index} />
    <Route path="template/page1" component={Hoge} />
    <Route path="template/page2" component={Router1}/>
  </Router>
  ), document.getElementById('app')
)
