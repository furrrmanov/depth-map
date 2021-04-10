import styled from 'styled-components'

import MaterialListItem from '@material-ui/core/ListItem'

export const Wrapper = styled.div`
  display: flex;
  justify-content: start;
  overflow-y: overlay;
  width: 100%;

  @media screen and (max-width: 600px) {
    justify-content: flex-start;
    width: 100%;
  }
`

export const ListItem = styled(MaterialListItem)`
  display: flex;
`
