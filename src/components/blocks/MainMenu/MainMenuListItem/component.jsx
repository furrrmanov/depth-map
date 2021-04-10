import React, { useState } from 'react'

import { makeStyles } from '@material-ui/core/styles'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import ListItemText from '@material-ui/core/ListItemText'
import Avatar from '@material-ui/core/Avatar'
import IconButton from '@material-ui/core/IconButton'
import TimelineIcon from '@material-ui/icons/Timeline'
import DeleteIcon from '@material-ui/icons/Delete'

import { ListItem, Container } from './styles'

const useStyles = makeStyles((theme) => ({
  button: {
    marginRight: '10px',
  },
}))

export default function MainMenuListItem(props) {
  const { data } = props
  const classes = useStyles()

  return (
    <Container>
      <div>
        <ListItem key={Math.random()}>
          <ListItemAvatar>
            <Avatar>
              <TimelineIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Name for map" secondary={'20.03.2021'} />
        </ListItem>
      </div>

      <div>
        <IconButton className={classes.button} edge="end" aria-label="delete">
          <DeleteIcon className={classes.icon} />
        </IconButton>
      </div>
    </Container>
  )
}
