import React from 'react';
import ReactDOM from 'react-dom';
import Content from './component/content';

class Main extends React.Component {
  render() {
    return (
      <section>
        <Content name='hoge' age={30}/>
      </section>
    )
  }
}

ReactDOM.render(
  <Main />,
  document.getElementById('app')
)
