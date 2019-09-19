import React from 'react';
import { Box, Typography, Grid, Paper} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import { makeStyles } from '@material-ui/core';
import { blue, red, lime } from '@material-ui/core/colors';
import { maxWidth } from '@material-ui/system';
import { white } from 'ansi-colors';

const useStyle = makeStyles( theme => ({
  root: {
    flexGrow: 1,
    overflow: 'hidden',
  },
  iconHover: {
    '&:hover': {
      color: red[800],
      cursor: 'pointer'
    },
  },
  icons: {
    textAlign: "center"    
  },
  paper: {
    maxWidth: '100%',
    margin: `${theme.spacing(1)}px auto`,
    padding: theme.spacing(2),
    backgroundColor: blue[600],
    color: '#ffffff'
  },
}))

export default function TodoItems(props) {

  const classes = useStyle();
    return (
      <div className={classes.root}>
        {
          props.items.map( (item, index) => {
            return (
              <Grid 
                container 
                wrap="nowrap" 
                spacing={2} 
                alignItems="center"
                justify="center" 
                key={index}
              >
                <Grid item xs={9} >
                  <Paper className={classes.paper}>
                    <Typography >{item}</Typography>
                  </Paper>
                </Grid>
                <Grid item xs={2} className={classes.icons}>
                  <DeleteIcon
                    className={classes.iconHover}
                    onClick={(e) => {
                      props.removeItem(item)
                    }}
                  >
                    Remove
                  </DeleteIcon>
                </Grid>
              </Grid>
            )
          })
        }
      </div>
    )
}
