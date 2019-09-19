import React from 'react';
import TodoItems from './TodoItems';
import AddItem from './AddItem';

class App extends React.Component {

  state = {
    items: ['Minh', 'Huy']
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
      <div>
        {<TodoItems items={this.state.items} removeItem={this.removeItem} />}
        <AddItem addItem={this.addItem} />
      </div>
    );
  };
}

export default App;
