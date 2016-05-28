import React from 'react';
import style from '../../style/style';

export default class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      card:
    }
  }
  render() {
    return(
      <li style={style.card}>
      <img src="img/{ this.props.card[i].imgPath }.png" style={style.img} key={i}/>
      </li>
    )
  }
}
