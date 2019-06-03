import React from 'react';

class Cell extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      color: this.props.value
    }
  }

  changeColor = () => {
    this.setState({
      color: '#333'
    })
  }

  render(){
    console.log(this)
    return (
      <div  className="cell" style={{backgroundColor: this.state.color}} onClick={this.changeColor} />
    )
  }
}

export default Cell;
