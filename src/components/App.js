import React from 'react';
import TodoItems from './TodoItems';
import AddItem from './AddItem';
import { Container } from '@material-ui/core';
import Header from './Header';
import { db } from '../config/firebase'

class App extends React.Component {

  state = {
    items: []
  }

  addItem = (newItem) => {
    if (!newItem) {
      return 'Please enter a valid option'
    } else if (this.state.items.includes(newItem)) {
      return 'Task is already existed'
    }

    this.setState((prevState) => ({items: [...prevState.items, newItem]}))
  }

  removeItem = (removedItem) => {
    this.setState((prevState) => ({
      items: prevState.items.filter((item) => (item !== removedItem))
    }))
  }

  render() {
    return (
      <Container maxWidth="md">
        <Header />
        {<TodoItems items={this.state.items} removeItem={this.removeItem} />}
        <AddItem addItem={this.addItem} />
      </Container>
    );
  };
}

export default App;
