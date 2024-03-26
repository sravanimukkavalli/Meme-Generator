import {Component} from 'react'
import Popup from 'reactjs-popup'
import {RiCloseLine} from 'react-icons/ri'
import EachListItem from './components/EachListItem'

import {
  BgContainer,
  HeaderContainer,
  EachItem,
  ScoreContainer,
  ScoreHeading,
  Score,
  UnorderedImagesList,
  RulesContainer,
  RulesButton,
  PopupContainer,
  RulesImage,
  FinalResultContainer,
  ResultContainer,
  EachImage,
  ParaEle,
  PlayButton,
} from './styledComponents'

import './App.css'

const choicesList = [
  {
    id: 'ROCK',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png',
  },
  {
    id: 'SCISSORS',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png',
  },
  {
    id: 'PAPER',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/paper-image.png',
  },
]

class App extends Component {
  state = {
    score: 0,
    isPlaying: true,
    userChoice: '',
    opponentChoice: '',
    result: '',
    userImage: '',
    opponentImage: '',
  }

  onClickImage = id => {
    console.log(id)
    const user = choicesList.filter(each => each.id === id)
    const userImage = user[0].imageUrl
    const randomNum = Math.floor(Math.random() * choicesList.length)
    const item = choicesList[randomNum]
    console.log(item)
    const userWon =
      (id === 'PAPER' && item.id === 'ROCK') ||
      (id === 'SCISSORS' && item.id === 'PAPER') ||
      (id === 'ROCK' && item.id === 'SCISSORS')

    const opponentWon =
      (id === 'ROCK' && item.id === 'PAPER') ||
      (id === 'PAPER' && item.id === 'SCISSORS') ||
      (id === 'SCISSORS' && item.id === 'ROCK')

    if (userWon) {
      this.setState(prevState => ({
        score: prevState.score + 1,
        result: 'YOU WON',
        userChoice: id,
        opponentChoice: item.id,
        isPlaying: !prevState.isPlaying,
        userImage,
        opponentImage: item.imageUrl,
      }))
    } else if (opponentWon) {
      this.setState(prevState => ({
        score: prevState.score - 1,
        result: 'YOU LOSE',
        userChoice: id,
        opponentChoice: item.id,
        isPlaying: !prevState.isPlaying,
        userImage,
        opponentImage: item.imageUrl,
      }))
    } else {
      this.setState(prevState => ({
        score: prevState.score,
        result: 'IT IS DRAW',
        userChoice: id,
        opponentChoice: item.id,
        isPlaying: !prevState.isPlaying,
        userImage,
        opponentImage: item.imageUrl,
      }))
    }
  }

  onClickPlayAgain = () => {
    this.setState(prevState => ({
      isPlaying: !prevState.isPlaying,
      userChoice: '',
      opponentChoice: '',
      result: '',
      userImage: '',
      opponentImage: '',
      score: prevState.score,
    }))
  }

  // getUser = () => {
  //   const {userChoice} = this.state
  //   const obj = choicesList.find(each => {
  //     if (each.id === userChoice) {
  //       return true
  //     }
  //     return false
  //   })
  //   return obj
  // }

  // getOpponent = () => {
  //   const {opponentChoice} = this.state
  //   const obj = choicesList.find(each => {
  //     if (each.id === opponentChoice) {
  //       return true
  //     }
  //     return false
  //   })
  //   return obj
  // }

  render() {
    const {score, isPlaying, result, userImage, opponentImage} = this.state

    return (
      <BgContainer>
        <HeaderContainer>
          <EachItem>
            ROCK <br /> PAPER <br /> SCISSORS
          </EachItem>
          <ScoreContainer>
            <ScoreHeading>Score</ScoreHeading>
            <Score>{score}</Score>
          </ScoreContainer>
        </HeaderContainer>
        {isPlaying ? (
          <UnorderedImagesList>
            {choicesList.map(each => (
              <EachListItem
                key={each.id}
                itemDetails={each}
                onClickImage={this.onClickImage}
              />
            ))}
          </UnorderedImagesList>
        ) : (
          <FinalResultContainer>
            <ResultContainer>
              <FinalResultContainer>
                <ParaEle>YOU</ParaEle>
                <EachImage src={userImage} alt="your choice" />
              </FinalResultContainer>
              <FinalResultContainer>
                <ParaEle>OPPONENT</ParaEle>
                <EachImage src={opponentImage} alt="opponent choice" />
              </FinalResultContainer>
            </ResultContainer>
            <ParaEle>{result}</ParaEle>
            <PlayButton type="button" onClick={this.onClickPlayAgain}>
              PLAY AGAIN
            </PlayButton>
          </FinalResultContainer>
        )}
        <RulesContainer>
          <Popup modal trigger={<RulesButton type="button">Rules</RulesButton>}>
            {close => (
              <PopupContainer>
                <button
                  type="button"
                  onClick={() => close()}
                  style={{alignSelf: 'flex-end'}}
                >
                  <RiCloseLine aria-label="button" size={22} />
                </button>
                <RulesImage
                  src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
                  alt="rules"
                />
              </PopupContainer>
            )}
          </Popup>
        </RulesContainer>
      </BgContainer>
    )
  }
}

export default App
