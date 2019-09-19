import React from 'react'
import { TextField, withStyles, Grid, Typography } from '@material-ui/core';
import PropTypes from 'prop-types';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

const styles = theme => ({
  root: {
  },
  textField: {
    width: '100%'
  },
  icon: {
    textAlign: "center"    
  },
});

class AddItem extends React.Component {

  state = {
    error: undefined
  }

  hanldeAddItem = (e) => {
    e.preventDefault();

    const newItem = e.target.elements.newItem.value.trim();
    const error = this.props.addItem(newItem);

    this.setState(() => ({ error }));

    if (!error) {
      e.target.elements.newItem.value = '';
    }
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <form onSubmit={this.hanldeAddItem}>
          <Grid 
            container
            wrap="nowrap" 
            spacing={2} 
            alignItems="center"
            justify="center"
          >
            <Grid item xs={9}>
              <TextField
                label="Add a Task"
                className={classes.textField}
                name="newItem"
                margin="normal"
                variant="outlined"
              />
              {
                !!this.state.error 
                && 
                <Typography color="secondary">
                  {this.state.error}
                </Typography>
              }
            </Grid>
            <Grid item xs={2} className={classes.icon}>
              <Fab color="primary" type="submit">
                <AddIcon />
              </Fab>
            </Grid>
          </Grid>
          
        </form>
      </div>
    )
  }
}

AddItem.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(AddItem);