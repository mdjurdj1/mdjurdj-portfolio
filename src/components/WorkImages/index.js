import React, {Component} from 'react'
import { CSSTransitionGroup } from 'react-transition-group'
import { Image, Label } from 'semantic-ui-react'
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
        <div className="workImage hover">
          <Image
            onMouseEnter={this.handleFocus}
            onMouseLeave={this.handleLeave}
            fluid
            label={{ as: 'string', color: 'blue', content: this.props.name, icon: this.props.icon, ribbon: true }}
             src={this.props.src}
             as='a'
             href={this.props.link}
             target='_blank'
           />
        </div>
      )
    } else {
      return (
        <div className="workImage">
        <Image
          onMouseEnter={this.handleFocus}
          onMouseLeave={this.handleLeave}
           fluid
           label={{ as: 'string', color: 'blue', content: this.props.name, icon: this.props.icon, ribbon: true }}
           src={this.props.src}
           as='a'
           href={this.props.link}
           target='_blank'
         />
        </div>
      )
    }
  }
}
