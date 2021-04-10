import React, { useState } from 'react'

import { makeStyles } from '@material-ui/core/styles'

import MainMenuList from './MainMenuList/'

import { Wrapper } from './styles'

const useStyles = makeStyles((theme) => ({
  wrapper: {
    height: 'calc(100vh - 100px)',
  },
}))

export default function MainMenu() {
  const classes = useStyles()

  return (
    <Wrapper className={classes.wrapper}>
      <MainMenuList />
    </Wrapper>
  )
}
