import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import MainMenu from 'components/blocks/MainMenu'
import Header from 'components/blocks/Header'
import { setChartsRequest } from 'actions'

import { Wrapper } from './styles'

export default function LandingPage() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(setChartsRequest())
  }, [dispatch]) 
  return (
    <Wrapper>
      <Header />
      <MainMenu />
    </Wrapper>
  )
}
