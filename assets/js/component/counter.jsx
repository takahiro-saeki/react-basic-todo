import React from 'react';

export default class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: this.props.count,
      title: this.props.title
    }
  }

  static defaultProps = {
    count: 0,
    title: 'カウンター'
  }

  static propTypes = {
    count: React.PropTypes.number.isRequired,
    title: React.PropTypes.string.isRequired
  }

  render() {
    return (
      <div>{this.props.title}：{this.props.count}</div>
    )
  }
}
