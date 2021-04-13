import React, { forwardRef, useState } from 'react'
import { useDispatch } from 'react-redux'

import { createPoint } from 'actions'

import {
  Popup,
  TextField,
  InputBlock,
  TimerBlock,
  ControlsBlock,
  PopupButton,
  InputContainer,
} from './styles'

const CreatePointPopup = forwardRef((props, ref) => {
  const { callback, chartsId } = props
  const dispatch = useDispatch()
  const [turnovers, setTurnovers] = useState(0)
  const [time, setTime] = useState(0)

  const hadleChangeTurnovers = ({ target }) => {
    setTurnovers(target.value)
  }

  const handleChangeTime = ({ target }) => {
    setTime(target.value)
  }

  const handleStopTimer = (value) => {
    setTime(value)
  }

  const handleClickAdd = () => {
    const newPoint = {
      data: {
        time: time,
        turnovers: turnovers,
      },
      id: chartsId,
      itemName: 'points',
      root: 'charts',
    }

    dispatch(createPoint(newPoint))
    callback.closeModal()
  }

  const hadleClickCancel = () => {
    callback.closeModal()
  }

  return (
    <Popup>
      <InputBlock>
        <InputContainer>
          <span>Обороты: </span>
          <TextField onChange={hadleChangeTurnovers} />
        </InputContainer>
        <InputContainer>
          <span>Время: </span>
          <TextField onChange={handleChangeTime} />
        </InputContainer>
      </InputBlock>
      <TimerBlock>Timer</TimerBlock>
      <ControlsBlock>
        <PopupButton variant="contained" onClick={handleClickAdd}>
          Добавить
        </PopupButton>
        <PopupButton variant="contained" onClick={hadleClickCancel}>
          Отмена
        </PopupButton>
      </ControlsBlock>
    </Popup>
  )
})

export default CreatePointPopup
