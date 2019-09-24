import React from 'react';
import TodoItems from './TodoItems';
import AddItem from './AddItem';
import { Container } from '@material-ui/core';
import Header from './Header';
import { db } from '../config/firebase'

const todosRef = db.collection('todos')

class App extends React.Component {

  state = {
    items: []
  }

  componentDidMount() {
    (async () => {
      const snapshot = await db.collection('todos').get()
      const todos = snapshot.docs.map(doc => doc.data().taskName);
      this.setState({
        items: todos
      })
    })()
  }

  addItem = (newItem) => {
    if (!newItem) {
      return 'Please enter a valid option'
    } else if (this.state.items.includes(newItem)) {
      return 'Task is already existed'
    }
    
    todosRef.add({
      taskName: newItem
    })

    this.setState((prevState) => ({items: [...prevState.items, newItem]}))
  }

  removeItem = (removedItem) => {
    todosRef.where('taskName', '==', removedItem).get().then(snapshot => {
      snapshot.docs.forEach(doc => doc.ref.delete())
    })

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
