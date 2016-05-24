import React from 'react';

export default class List extends React.Component {
  static defaultProps = {
    name: 'デフォルト'
  }

  static propTypes = {
    name: React.PropTypes.string.isRequired
  }

  render() {
    return (
      <li onClick={this.props.onClick}>{this.props.name}</li>
    )
  }
}
