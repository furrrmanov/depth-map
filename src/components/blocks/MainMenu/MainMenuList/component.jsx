import React, { useState } from 'react'

import { makeStyles } from '@material-ui/core/styles'
import List from '@material-ui/core/List'

import MainMenuListItem from '../MainMenuListItem/'

const useStyles = makeStyles((theme) => ({
  list: {
    width: '100%',
    margin: '0px 10px 0px 10px',
  },
}))

export default function MainMenuList() {
  const classes = useStyles()

  const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

  return (
    <List className={classes.list} dense={false}>
      {arr.map((item, index) => {
        return <MainMenuListItem data={item} key={index} />
      })}
    </List>
  )
}
