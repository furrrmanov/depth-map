import styled from 'styled-components'

import MaterialButton from '@material-ui/core/Button'
import MaterialCloseIcon from '@material-ui/icons/Close'

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 10px;
`

export const Label = styled.span`
  font-size: 24px;
  font-weight: bold;
  color: ${(props) => props.theme.elements};
`

export const Button = styled(MaterialButton)`
  margin-top: 10px !important;
`

export const Popup = styled.div`
  position: relative;
  text-align: left;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: ${(props) => props.theme.text};
  background-color: ${(props) => props.theme.background};
  width: 300px;
  margin: auto;
  outline: none;
  box-shadow: 0px 0px 8px 2px ${(props) => props.theme.elements};
  border-radius: 10px;

  @media screen and (max-width: 600px) {
    width: 100%;
    height: 100%;
    border-radius: 0px;
  }
`

export const PopupTitle = styled.span`
  margin: 10px 0px 0px 10px;
  font-size: 20px;

  @media screen and (max-width: 600px) {
    font-size: 30px;
  }
`

export const PopupText = styled.span`
  font-size: 16px;

  @media screen and (max-width: 600px) {
    font-size: 20px;
  }
`

export const PopupInputContainer = styled.div`
  display: flex;
  padding: 10px;
  flex-direction: column;
  margin: 10px 0px 0px 0px;
`
export const TextField = styled.input`
  margin-top: 5px;
  outline: none;
  height: 30px;
  border: none;
  border-radius: 10px;
  font-size: 18px;

  @media screen and (max-width: 600px) {
    height: 40px;
  }
`

export const PopupButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 20px 10px 20px 10px;

  @media screen and (max-width: 600px) {
    justify-content: center;
  }
`

export const PopupButton = styled(MaterialButton)`
  width: 80px;
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

export const ButtonClose = styled(MaterialCloseIcon)`
  position: absolute;
  top: 0;
  right: 0;
  cursor: pointer;

  @media screen and (max-width: 600px) {
    width: 40px !important;
    height: 40px !important;
  }
`
