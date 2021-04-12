import React, { forwardRef } from 'react'

import { Popup, PopupTitle, PopupButtonContainer, PopupButton } from './styles'

const PopupConfirmActions = forwardRef((props, ref) => {
  const { callback } = props

  const handleClickButtonOk = () => {
    callback.confirm()
  }

  const handleClickButtonCancel = () => {
    callback.cancel()
  }

  return (
    <Popup>
      <PopupTitle>Вы уверены ?</PopupTitle>
      <PopupButtonContainer>
        <PopupButton variant="contained" onClick={handleClickButtonOk}>
          Ok
        </PopupButton>
        <PopupButton variant="contained" onClick={handleClickButtonCancel}>
          Cancel
        </PopupButton>
      </PopupButtonContainer>
    </Popup>
  )
})

export default PopupConfirmActions
