import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Paper from "@material-ui/core/Paper"

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2)
  }
}))

export default function PaperSheet({ children }) {
  const classes = useStyles()

  return <Paper className={classes.root}>{children}</Paper>
}
