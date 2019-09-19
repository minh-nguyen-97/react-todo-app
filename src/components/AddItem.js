import React from 'react'

export default class AddItem extends React.Component {

  state = {
    error: undefined
  }

  hanldeAddItem = (e) => {
    e.preventDefault();

    console.log(e.target.elements.newItem.value)

    const newItem = e.target.elements.newItem.value.trim();
    const error = this.props.addItem(newItem);

    this.setState(() => ({ error }));

    if (!error) {
      e.target.elements.newItem.value = '';
    }
  }

  render() {
    return (
      <div>
        <form onSubmit={this.hanldeAddItem}>
          <input type="text" name="newItem" />
          <button>Add Task</button>
        </form>
        {!!this.state.error && this.state.error}
      </div>
    )
  }
}