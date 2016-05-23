import React from 'react';
import ReactDOM from 'react-dom';
import Counter from './counter';
import List from './list';

export default class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [
        { id: 0, name: 'hoge' },
        { id: 1, name: 'foo' },
        { id: 2, name: 'bar' },
        { id: 3, name: 'ruki' },
        { id: 4, name: 'reita' },
        { id: 5, name: 'uruha' },
        { id: 6, name: 'kai' },
        { id: 7, name: 'aoi' },
        { id: 8, name: 'yune' }
      ],
      count: 0
    }
    this.hide = this.hide.bind(this);
  }

  hide(e) {
    e.target.style.display = 'none';
    this.setState({
      count: this.state.count + 1
    })
    if (this.state.count === 8) {
      alert('終了！')
      this.setState({
        count: 0
      })
      const list = document.querySelectorAll('li');
      for (var i = 0; i < list.length; i++) {
        list[i].style.display = 'block';
      }
    }
  }

  render() {
    const lists = this.state.list.map((li, i) => {
      return <List onClick={this.hide} key={li.id} name={li.name} />
    })

    return (
      <section>
      <Counter count={this.state.count} title='スーパーカウンター' />
      <ul>{lists}</ul>
      </section>
    )
  }
}
