import {Component} from 'react'

import {
  AppContainer,
  Header,
  Title,
  DirectionContainer,
  ColorContainer,
  ColorPicker,
  Color,
} from './styledComponents'

import GradientDirectionItem from '../GradientDirectionItem'

const gradientDirectionsList = [
  {directionId: 'TOP', value: 'top', displayText: 'Top'},
  {directionId: 'BOTTOM', value: 'bottom', displayText: 'Bottom'},
  {directionId: 'RIGHT', value: 'right', displayText: 'Right'},
  {directionId: 'LEFT', value: 'left', displayText: 'Left'},
]

class GradientGenerator extends Component {
  state = {
    direction: 'top',
    firstColor: '#8ae323',
    secondColor: '#014f7b',
    backgroundColor: `to ${gradientDirectionsList[0].value}, #8ae323, #014f7b`,
  }

  changeDirection = value => {
    this.setState({direction: value}, this.onClickGenerator)
  }

  onChangeFirstColor = event => {
    this.setState({
      firstColor: event.target.value,
    })
  }

  onChangeSecondColor = event => {
    this.setState({
      secondColor: event.target.value,
    })
  }

  onClickGenerator = () => {
    const {direction, firstColor, secondColor} = this.state
    this.setState({
      backgroundColor: `to ${direction},${firstColor},${secondColor}`,
    })
  }

  render() {
    const {firstColor, secondColor, backgroundColor, direction} = this.state
    console.log(backgroundColor, direction)
    return (
      <AppContainer backgroundColor={backgroundColor}>
        <Header>Generate a CSS Color Gradient</Header>
        <Title>Choose direction</Title>
        <DirectionContainer>
          {gradientDirectionsList.map(eachDirection => (
            <GradientDirectionItem
              eachDirection={eachDirection}
              key={eachDirection.directionId}
              changeDirection={this.changeDirection}
            />
          ))}
        </DirectionContainer>
        <ColorContainer>
          <ColorPicker>
            <p>{firstColor}</p>
            <Color
              type="color"
              onChange={this.onChangeFirstColor}
              value={firstColor}
            />
          </ColorPicker>
          <ColorPicker>
            <p>{secondColor}</p>
            <Color
              type="color"
              onChange={this.onChangeSecondColor}
              value={secondColor}
            />
          </ColorPicker>
        </ColorContainer>
        <button type="button" onClick={this.onClickGenerator}>
          Generator
        </button>
      </AppContainer>
    )
  }
}
export default GradientGenerator
