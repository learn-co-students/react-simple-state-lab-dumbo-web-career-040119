import React, { Component } from 'react';

class Cell extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      color: this.props.value

    }
  }

  clicking = () => {
    this.setState ({
      color: '#333'
    })

  }
    render() {
      return (
        <div className="cell"
        style={{backgroundColor: this.state.color}}
        onClick={this.clicking}>
        </div>
      )
    }
}

export default Cell
