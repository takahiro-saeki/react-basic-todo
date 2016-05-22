import React from 'react';

export default class Content extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: this.props.name,
      age: this.props.age,
      hobby: this.props.hobby
    }
  }

  static propTypes = {
    name: React.PropTypes.string.isRequired,
    age: React.PropTypes.number.isRequired,
    hobby: React.PropTypes.string.isRequired
  }

  static defaultProps = {
    name: 'hiro',
    age: 24,
    hobby: 'DanceDanceRevolution'
  }

  render() {
    return (
      <ul>
        <li>{this.state.name}</li>
        <li>{this.state.age}</li>
        <li>{this.state.hobby}</li>
      </ul>
    )
  }
}
