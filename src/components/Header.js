import React from 'react'
import { Typography, Grid, makeStyles } from '@material-ui/core'

const useStyle = makeStyles( theme => ({
  header: {
    fontSize: '1cm',
    fontStyle: 'italic'
  }
}))

export default function Header() {

  const classes = useStyle();
  return (
    <Grid 
      container 
      wrap="nowrap" 
      spacing={2} 
      alignItems="center"
      justify="center" 
    >
      <Grid item xs={9} >
          <Typography
            className={classes.header}
          >
            Tasks Todo
          </Typography>
      </Grid>
      <Grid item xs={2}>
      </Grid>
    </Grid>
  )
}