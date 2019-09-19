import React from 'react'

export default class TodoItems extends React.Component {
  render() {
    return (
      <div>
        {
          this.props.items.map( (item, index) => {
            return (
              <div key={index}>
                {item}
                <button 
                  onClick={(e) => {
                    this.props.removeItem(item)
                  }}
                >
                  Remove
                </button>
              </div>            
            )
          })
        }
      </div>
    )
  }
}