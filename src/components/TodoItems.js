import React from 'react';
import { Typography, Grid, Paper, Fab} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import { makeStyles } from '@material-ui/core';
import { blue } from '@material-ui/core/colors';

const useStyle = makeStyles( theme => ({
  root: {
    flexGrow: 1,
    overflow: 'hidden',
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
                  <Fab color="secondary">
                    <DeleteIcon
                      className={classes.iconHover}
                      onClick={(e) => {
                        props.removeItem(item)
                      }}
                    />
                  </Fab>
                </Grid>
              </Grid>
            )
          })
        }
      </div>
    )
}
