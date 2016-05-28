import React from 'react';
import ReactDOM from 'react-dom';
import Main from './component/content';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();
document.body.style.margin = 0;

ReactDOM.render(
  <Main />,
  document.getElementById('app')
)
