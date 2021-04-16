import React, { useState } from "react"
import { useSelector } from "react-redux"

import { makeStyles } from "@material-ui/core/styles"
import List from "@material-ui/core/List"

import MainMenuListItem from "../MainMenuListItem/"

const useStyles = makeStyles((theme) => ({
  list: {
    width: "100%",
    margin: "0px 10px 0px 10px",
  },
  text: {
    color: "#ccc",
    margin: "50px auto",
  },
}))

export default function MainMenuList() {
  const classes = useStyles()
  const charts = useSelector((state) => state.charts.data)

  return charts.length !== 0 ? (
    <List className={classes.list} dense={false}>
      {charts.map((item, index) => {
        return <MainMenuListItem data={item} key={index} />
      })}
    </List>
  ) : (
    <h2 className={classes.text}>Создайте график</h2>
  )
}
