import React from 'react';

export default class Counter extends React.Component {
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
