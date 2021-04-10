import styled from 'styled-components'

import MaterialListItem from '@material-ui/core/ListItem'

export const ListItem = styled(MaterialListItem)`
  display: flex;
`

export const Container = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
  border-radius: 10px;

  &:hover {
    background-color: ${props => props.theme.error};
  }
`
