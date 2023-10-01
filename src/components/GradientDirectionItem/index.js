import {GradiantButton} from './styledComponents'

const GradientDirectionItem = props => {
  const {eachDirection, changeDirection} = props
  const {value} = eachDirection
  const onClickDirectionItem = () => {
    changeDirection(value)
  }

  return (
    <GradiantButton onClick={onClickDirectionItem}>
      {eachDirection.displayText}
    </GradiantButton>
  )
}
export default GradientDirectionItem
