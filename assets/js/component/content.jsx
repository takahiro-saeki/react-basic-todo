import React from 'react';
import style from '../../style/style';
import cardData from '../data/data';
import {find} from 'lodash/collection';

export default class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      card: cardData,
      first: {
        type: null,
        number: null,
        id: null
      },
      second: {
        type: null,
        number: null,
        id: null
      }
    }
    this.updateCheck = false;
    this.judge = this.judge.bind(this);
    this.check = this.check.bind(this);
    this.reverses = this.reverses.bind(this);
    this.defalutBack = this.defalutBack.bind(this);
  }

  componentDidUpdate() {
    if(find(this.state.card, {defaults: true})) {
      console.log('裏のカードはまだある')
    } else {
      //setTimeout(alert('ゲーム終了！'), 1000);
      alert('ゲーム終了！')
      return false;
    }
    if (this.updateCheck === true) {
      this.updateCheck = false;
      return false;
    }
    if(this.state.first.number === this.state.second.number) {
      this.check()
    } else if(this.state.first.number !== this.state.second.number && this.state.second.number !== null) {
      this.reverses();
    } else {
      console.log('test')
    }
  }

  check() {
    const firstId = this.state.first.id;
    const secondId = this.state.second.id;
    this.setState(() => {
      this.state.card[firstId].check = true
      this.state.card[secondId].check = true
      this.updateCheck = true
    })
    this.defalutBack();
  }

  reverses() {
    const firstId = this.state.first.id;
    const secondId = this.state.second.id;
    this.setState(() => {
      this.state.card[firstId].defaults = true
      this.state.card[secondId].defaults = true
      this.updateCheck = true
    })
    this.defalutBack();
  }

  defalutBack() {
    this.setState({
      first: {
        type: null,
        number: null,
        id: null
      },
      second: {
        type: null,
        number: null,
        id: null
      }
    })
    this.updateCheck = true
  }

  judge(e) {
    const type = e.target.getAttribute('data-type');
    const number = e.target.getAttribute('data-number');
    const defaultCheck = e.target.getAttribute('data-cardId');
    if(this.state.card[defaultCheck].defaults === false) {
      return false
    }
    if(this.state.first.type === null) {
      this.setState({
        first: {
          type: e.target.getAttribute('data-type'),
          number: e.target.getAttribute('data-number'),
          id: e.target.getAttribute('data-cardId')
        }
      })
    } else if (this.state.first.type !== null && this.state.second.type === null) {
      this.setState({
        second: {
          type: e.target.getAttribute('data-type'),
          number: e.target.getAttribute('data-number'),
          id: e.target.getAttribute('data-cardId')
        }
      })
    } else {
      console.log('コンプリート')
    }

    const cardId = e.target.getAttribute('data-cardId');
        console.log(e.target.getAttribute('data-type'))
        console.log(e.target.getAttribute('data-number'))

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
        data-check={card.check}
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
