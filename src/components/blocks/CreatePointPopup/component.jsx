import React, { forwardRef, useState } from 'react'
import { useDispatch } from 'react-redux'

import { createPoint } from 'actions'
import Timer from 'components/blocks/Timer'

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

  const addTime = (value) => {
    setTime(value / 1000)
  }

  const resetTime = () => {
    setTime(0)
  }

  return (
    <Popup>
      <InputBlock>
        <InputContainer>
          <span>Обороты: </span>
          <TextField value={turnovers} onChange={hadleChangeTurnovers} />
        </InputContainer>
        <InputContainer>
          <span>Время: </span>
          <TextField value={time} onChange={handleChangeTime} />
        </InputContainer>
      </InputBlock>
      <TimerBlock>
        <Timer callback={{
          setTime: addTime,
          resetTime: resetTime
        }} />
      </TimerBlock>
      <ControlsBlock>
        <PopupButton disabled={ !time || !turnovers} variant="contained" onClick={handleClickAdd}>
          Установить
        </PopupButton>
        <PopupButton variant="contained" onClick={hadleClickCancel}>
          Отмена
        </PopupButton>
      </ControlsBlock>
    </Popup>
  )
})

export default CreatePointPopup
