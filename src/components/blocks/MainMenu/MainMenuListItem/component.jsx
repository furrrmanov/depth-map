import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'

import { makeStyles } from '@material-ui/core/styles'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import ListItemText from '@material-ui/core/ListItemText'
import Avatar from '@material-ui/core/Avatar'
import IconButton from '@material-ui/core/IconButton'
import TimelineIcon from '@material-ui/icons/Timeline'
import DeleteIcon from '@material-ui/icons/Delete'
import moment from 'moment'

import PopupConfirmActions from 'components/blocks/PopupConfirmActions'
import Modal from 'components/blocks/Modal'
import { deleteCharts } from 'actions'
import { ROUT_FOR_CHARTS_PAGE } from 'constants.js'

import { ListItem, Container, Button, Info, ButtonContainer } from './styles'

const useStyles = makeStyles((theme) => ({
  button: {
    marginRight: '10px',
  },
  text: {
    wordBreak: 'break-word',
    width: '80%',
  },
}))

export default function MainMenuListItem(props) {
  const { data } = props
  const dispatch = useDispatch()
  const history = useHistory()
  const classes = useStyles()
  const [openModal, setOpenModal] = useState(false)

  const handleClickOpen = () => {
    history.push(ROUT_FOR_CHARTS_PAGE + `?id=${data.id}`)
  }

  const handleClickDelete = () => {
    setOpenModal(true)
  }

  const ConfirmDelete = () => {
    setOpenModal(false)
    dispatch(deleteCharts({ root: 'charts', entityId: data.id }))
  }

  const CancelDelete = () => {
    setOpenModal(false)
  }

  return (
    <>
      <Container>
        <Info>
          <ListItem key={data.id}>
            <ListItemAvatar>
              <Avatar>
                <TimelineIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              className={classes.text}
              primary={data.name}
              secondary={`${moment.unix(data.date / 1000).format('L HH:mm')}`}
            />
          </ListItem>
        </Info>

        <ButtonContainer>
          <Button variant="contained" color="primary" onClick={handleClickOpen}>
            Открыть
          </Button>
          <IconButton
            className={classes.button}
            edge="end"
            aria-label="delete"
            onClick={handleClickDelete}>
            <DeleteIcon className={classes.icon} />
          </IconButton>
        </ButtonContainer>
      </Container>
      <Modal open={openModal}>
        <PopupConfirmActions
          callback={{
            confirm: ConfirmDelete,
            cancel: CancelDelete,
          }}
        />
      </Modal>
    </>
  )
}
