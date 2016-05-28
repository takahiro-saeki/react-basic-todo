import React from 'react';
import { Link } from 'react-router';

import { RouteTransition } from 'react-router-transition';

const RouteTransitionDemo = (props) => (
  <div>
    {props.route.childRoutes.map((childRoute, index) => {
      const to = ['', props.route.path, childRoute.path].join('/');
      return (
        <Link className="link" key={to} to={to}>
          another {props.route.path}
        </Link>
      );
    })}
    <RouteTransition
      component={false}
      className="transition-wrapper"
      pathname={props.location.pathname}
      {...props.preset}
    >
      {props.children}
    </RouteTransition>
  </div>
);

export default RouteTransitionDemo;
