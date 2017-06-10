import React, {Component} from 'react'
import { CSSTransitionGroup } from 'react-transition-group'
import { Image } from 'semantic-ui-react'
import "./workImage.css"

export default class WorkImage extends Component {
  state = {
    hover: false
  }

  handleFocus = () => {
    this.setState({
      hover: true
    })
  }

  handleLeave = () => {
    this.setState({
      hover: false
    })
  }

  render() {
    if(this.state.hover) {
      return (
        <div className="workImage hover" onMouseOver={this.handleFocus} onMouseLeave={this.handleLeave}>
          <Image
             src={this.props.src}
             as='a'
             href={this.props.link}
             target='_blank'
           />
          <p>{this.props.name}</p>
        </div>
      )
    } else {
      return (
        <div className="workImage" onMouseOver={this.handleFocus} onMouseLeave={this.handleLeave}>
          <img src={this.props.src} alt="" />
        </div>
      )
    }
  }
}
