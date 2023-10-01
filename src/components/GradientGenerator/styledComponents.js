import styled from 'styled-components'

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-image: linear-gradient(${props => props.backgroundColor});
  background-size: cover;
  height: 100vh;
`
export const Header = styled.h1`
  color: black;
`
export const Title = styled.h3`
  color: black;
`
export const DirectionContainer = styled.div`
  display: flex;
`

export const ColorContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 150px;
`
export const ColorPicker = styled.div`
  display: flex;
  flex-direction: column;
`
export const Color = styled.input`
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  height: 30px;
  background-color: transparent;
  border: none;
  cursor: pointer;
`
