import React, { useState, useEffect } from 'react'

import moment from 'moment'

import { Wrapper, ButtonContainer, PopupButton, TimerContainer } from './styles'

export default function Timer(props) {
  const { callback } = props
  const [counting, setCounting] = useState(false)
  const [firstClick, setFirstClick] = useState(false)
  const [overallTime, setOverallTime] = useState(0)

  useEffect(() => {
    let timerId
    if (counting) {
      timerId = setInterval(() => {
        setOverallTime((prevCount) => (prevCount += 10))
      }, 10)
    }

    return () => clearInterval(timerId)
  })

  const displayTime = (time) => {
    if (time < 3600000) {
      return moment()
        .hour(0)
        .minute(0)
        .second(0)
        .millisecond(time)
        .format('ss . SS')
    } else {
      return moment()
        .hour(0)
        .minute(0)
        .second(0)
        .millisecond(time)
        .format('HH : mm : ss . SS')
    }
  }

  const handleStart = () => {
    setCounting(!counting)
    setFirstClick(!firstClick)
  }

  const handleReset = () => {
    setCounting(false)
    setFirstClick(false)
    setOverallTime(0)
    callback.resetTime()
  }

  const handleAddTime = () => {
    callback.setTime(overallTime)
  }

  return (
    <Wrapper>
      <TimerContainer>
        <span>{displayTime(overallTime)}</span>
      </TimerContainer>

      <ButtonContainer>
        {!counting && !firstClick ? (
          <PopupButton onClick={handleStart}>Старт</PopupButton>
        ) : (
          <div>
            {counting ? (
              <PopupButton onClick={() => setCounting(!counting)}>
                Стоп
              </PopupButton>
            ) : (
              <PopupButton onClick={handleAddTime}>Добавить</PopupButton>
            )}
            <PopupButton onClick={handleReset}>Обновить</PopupButton>
          </div>
        )}
      </ButtonContainer>
    </Wrapper>
  )
}
