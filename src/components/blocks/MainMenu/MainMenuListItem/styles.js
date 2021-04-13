import styled from 'styled-components'

import MaterialListItem from '@material-ui/core/ListItem'
import MaterialButton from '@material-ui/core/Button'

export const ListItem = styled(MaterialListItem)`
  display: flex;
`

export const Info = styled.div`
  width: 60%;
  @media screen and (max-width: 600px) {
    width: 100% !important;
  }
`

export const Container = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
  border-radius: 10px;
  margin-top: 10px;

  &:hover {
    background-color: ${(props) => props.theme.error};
  }

  @media screen and (max-width: 600px) {
    flex-direction: column;
  }
`

export const ButtonContainer = styled.div`
  @media screen and (max-width: 600px) {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    padding-bottom: 10px;
  }
`

export const Button = styled(MaterialButton)``
