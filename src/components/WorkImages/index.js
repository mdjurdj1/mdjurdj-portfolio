import React, {Component} from 'react'
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
            <p className="language">{this.props.language}</p>
        </div>
      )
    } else {
      return (
        <div className="workImage">
          <Image className="work_image"
            onMouseEnter={this.handleFocus}
            onMouseLeave={this.handleLeave}
             fluid
             label={{ as: 'string', color: 'black', content: this.props.name, icon: this.props.icon, ribbon: true }}
             src={this.props.src}
             as='a'
             href={this.props.link}
             target='_blank'
           />
          <p className="language">{this.props.language}</p>
        </div>
      )
    }
  }
}
