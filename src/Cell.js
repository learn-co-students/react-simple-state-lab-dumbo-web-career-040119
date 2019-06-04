import React, {Component} from 'react'

export default class Cell extends Component {

  constructor(props) {
    super(props)
    this.state = {color: props.value}
  }

  cellClick = (event) => {
    this.setState({color: '#333'})
  }

  render() {
    return(
      <div
        className="cell"
        style={{backgroundColor: this.state.color}}
        onClick={this.cellClick}>
      </div>
    )
  }
}
