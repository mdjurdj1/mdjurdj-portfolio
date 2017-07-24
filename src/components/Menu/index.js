import React, {Component} from 'react'
import {Icon} from 'semantic-ui-react'
import {Link} from 'react-router-dom'
import './menu.css'

export default class Menu extends Component {
  state = {
    open: false
  }

  handleClick = () => {
    this.setState({
      open: !this.state.open
    })
  }

  render() {
    if(!this.state.open) {
      return (
        <div id="menu">
          <Icon onClick={this.handleClick} className="menu_icon" name="content" />
        </div>
      )
    } else {
      return (
        <div id="menu" className="opened">
        <Icon name="content" className="menu_icon" onClick={this.handleClick} />
          <div id="breadcrumbs">
            <p><Link to="/">Home</Link></p>
            <p><Link to="/about">About</Link></p>
            <p><Link to="/work">My Work</Link></p>
            <p><Link to="/skills">Skills</Link></p>
            <p><Link to="/contact">Contact</Link></p>
          </div>
        </div>
      )
    }
  }
}
