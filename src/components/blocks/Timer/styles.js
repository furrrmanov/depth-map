import styled from 'styled-components'

import MaterialButton from '@material-ui/core/Button'

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-direction: column;
`

export const ButtonContainer = styled.div``

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

export const TimerContainer = styled.div`
  width: 100px;
  height: 100px;
  border: 1px solid #ff6700;
  border-radius: 100px;
  display: flex;
  text-align: center;
  margin-bottom: 30px;


  span {
    font-size: 25px;
    margin: 30px auto;
  }
`


