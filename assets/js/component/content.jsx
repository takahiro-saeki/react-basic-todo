import React from 'react';
import style from '../../style/style';
//import Card from './card';

export default class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      card: [
        {
          number: 1,
          imgPath: 's01',
          type: 'spade'
        },
        {
          number: 2,
          imgPath: 's02',
          type: 'spade'
        },
        {
          number: 1,
          imgPath: 'd01',
          type: 'dia'
        },
        {
          number: 2,
          imgPath: 'd02',
          type: 'dia'
        },
        {
          number: 1,
          imgPath: 'h01',
          type: 'heart'
        },
        {
          number: 2,
          imgPath: 'h02',
          type: 'heart'
        },
        {
          number: 1,
          imgPath: 'c01',
          type: 'club'
        },
        {
          number: 2,
          imgPath: 'c02',
          type: 'club'
        }
      ]
    }
  }
  render() {
    const cardContent = this.state.card.map((card, i) => {
      return (
        <li style={style.card} key={i}>
        <img src={`img/${this.state.card[i].imgPath}.png`} style={style.img} />
        </li>
      )
    })
    return(
      <ul style={style.cardWrap}>
      {cardContent}
      </ul>
    )
  }
}
