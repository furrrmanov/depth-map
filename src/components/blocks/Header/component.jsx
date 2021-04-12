import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import Modal from 'components/blocks/Modal'

import { createCharts } from 'actions'

import {
  Wrapper,
  Label,
  Button,
  Popup,
  ButtonClose,
  PopupTitle,
  PopupInputContainer,
  PopupText,
  PopupButtonContainer,
  TextField,
  PopupButton,
} from './styles'

export default function Header() {
  const dispatch = useDispatch()
  const [openModal, setOpenModal] = useState(false)
  const [createdName, setCreatedName] = useState('')

  const handleOnChangeInput = ({ target }) => {
    setCreatedName(target.value)
  }

  const handleClickButtonCreate = () => {
    setOpenModal(true)
  }

  const handleClickButtonClose = () => {
    setOpenModal(false)
    setCreatedName('')
  }

  const handleClickButtonOk = () => {
    setOpenModal(false)
    dispatch(
      createCharts({
        name: createdName,
      })
    )
    setCreatedName('')
  }

  const handleClickButtonCancel = () => {
    setOpenModal(false)
    setCreatedName('')
  }

  return (
    <Wrapper>
      <Label>Depth map</Label>
      <Button
        variant="contained"
        color="primary"
        onClick={handleClickButtonCreate}>
        Создать
      </Button>

      <Modal open={openModal}>
        <Popup>
          <ButtonClose onClick={handleClickButtonClose} />
          <PopupTitle>Карта</PopupTitle>
          <PopupInputContainer>
            <PopupText>Введите название</PopupText>
            <TextField
              autoFocus
              autocomplete="off"
              value={createdName}
              onChange={handleOnChangeInput}
            />
          </PopupInputContainer>
          <PopupButtonContainer>
            <PopupButton
              variant="contained"
              onClick={handleClickButtonOk}
              disabled={!createdName}>
              Ok
            </PopupButton>
            <PopupButton variant="contained" onClick={handleClickButtonCancel}>
              Cancel
            </PopupButton>
          </PopupButtonContainer>
        </Popup>
      </Modal>
    </Wrapper>
  )
}
