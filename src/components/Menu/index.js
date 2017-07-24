import React, {Component} from 'react'
import { CSSTransitionGroup } from 'react-transition-group'
import {Icon} from 'semantic-ui-react'
import {NavLink, Link} from 'react-router-dom'
import './menu.css'

export default class Menu extends Component {

  handleOpen = () => {
    document.getElementById("myNav").style.width = "100%";
  }

  handleClose = () => {
    document.getElementById("myNav").style.width = "0%"
  }

  render() {
      return (
        <div>
        <Icon name="content" className="menu_icon" size="large" onClick={this.handleOpen} />

        <div id="myNav" className="overlay">
        <span className="closebtn" onClick={this.handleClose} >&times;</span>
          <div className="overlay-content">
            <p><Link to="/">Home</Link></p>
            <p><NavLink to="/about">About</NavLink></p>
            <p><NavLink to="/work">My Work</NavLink></p>
            <p><NavLink to="/skills">Skills</NavLink></p>
            <p><NavLink to="/contact">Contact</NavLink></p>
          </div>
        </div>

        </div>
      )
    }
}
