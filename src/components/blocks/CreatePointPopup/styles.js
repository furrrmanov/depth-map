import styled from 'styled-components'

import MaterialButton from '@material-ui/core/Button'

export const Popup = styled.div`
  position: relative;
  text-align: left;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: ${(props) => props.theme.text};
  background-color: ${(props) => props.theme.background};
  width: 400px;
  margin: auto;
  outline: none;
  box-shadow: 0px 0px 8px 2px ${(props) => props.theme.elements};
  border-radius: 10px;

  @media screen and (max-width: 800px) {
    width: 100%;
    height: 100%;
    border-radius: 0px;
  }
`

export const TextField = styled.input`
  margin-top: 5px;
  outline: none;
  height: 30px;
  width: 50px;
  border: none;
  border-radius: 10px;
  font-size: 18px;

  @media screen and (max-width: 600px) {
    height: 40px;
  }
`

export const InputBlock = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  margin: 20px auto;
`

export const InputContainer = styled.div`
  margin: 0px 20px 0px 20px;
`

export const TimerBlock = styled.div`
  width: 100%;
  height: 200px;
`

export const ControlsBlock = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px 10px 20px 10px;
`

export const PopupButton = styled(MaterialButton)`
  width: 110px;
  margin-left: 10px !important;
  text-transform: none !important;
  background-color: ${(props) => props.theme.secondary} !important;
  &:hover {
    background-color: ${(props) => props.theme.primary} !important;
  }

  @media screen and (max-width: 600px) {
    font-size: 20px !important;
  }
`
