import React, {Component} from 'react'
import {Icon} from 'semantic-ui-react'
import {Link} from 'react-router-dom'
import './NavArrowLeft.css'

export default class NavArrowLeft extends Component {
  state = {
    hover: false
  }

  onHover = () => {
    this.setState({
      hover: true
    })
  }
  unHover = () => {
    this.setState({
      hover: false
    })
  }

  render() {
  if(!this.state.hover) {
      return (
        <div id="navarrowleft" onMouseEnter={this.onHover}>
          <Link to="/"> <Icon name='angle left' /> </Link>
        </div>
      )
  } else {
      return (
        <div id="navarrowleft" onMouseLeave={this.unHover}>
          <Link to="/"> <Icon name='angle left' /></Link>
          <span id="navText">About</span>
        </div>
      )
  }
}
}
