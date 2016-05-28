import React from 'react';
import style from '../../style/style';
import cardData from '../data/data';
//import Card from './card';

export default class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      card: cardData,
      first: {
        type: null,
        number: null
      },
      second: {
        type: null,
        number: null
      }
    }
    this.judge = this.judge.bind(this);
  }

  componentDidUpdate() {
    if(this.state.first.number === this.state.second.number) {
      console.log('カードをオープンしたままにする');
      console.log(this.state.first)
      console.log(this.state.second)
    } else {
      console.log('カードを裏返す');
      console.log(this.state.first)
      console.log(this.state.second)
    }
  }

  judge(e) {
    const type = e.target.getAttribute('data-type');
    const number = e.target.getAttribute('data-number');
    if(this.state.first.type === null) {
      this.setState({
        first: {
          type: e.target.getAttribute('data-type'),
          number: e.target.getAttribute('data-number')
        }
      })

    } else if (this.state.first.type !== null && this.state.second.type === null) {
      this.setState({
        second: {
          type: e.target.getAttribute('data-type'),
          number: e.target.getAttribute('data-number')
        }
      })
    } else {
      console.log('コンプリート')
    }

    const cardId = e.target.getAttribute('data-cardId');
        console.log(e.target.getAttribute('data-type'))
        console.log(e.target.getAttribute('data-number'))

    this.state.card.map((card,i) => {
      if(card.defaults === false) {
        return false;
      }
    })
    this.setState(() => this.state.card[cardId].defaults = false)
  }

  render() {
    const cardContent = this.state.card.map((card, i) => {
      return (
        <li style={style.card} key={i}>
        <img src={`img/${card.defaults ? 'z01' : card.imgPath}.png`}
        style={style.img}
        data-type={card.type}
        data-number={card.number}
        data-cardId={card.id}
        onClick={this.judge} />
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
