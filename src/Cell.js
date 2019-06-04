import React from 'react'


class Cell extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      color: this.props.value
    }
  }

  handleChangeColor = () => {
      this.setState({
        color: '#333'
      })
  }

  render() {
    return (
      <div className="cell" style={{backgroundColor: this.state.color}} onClick={this.handleChangeColor}>
      </div>
    )
  }
}


export default Cell
