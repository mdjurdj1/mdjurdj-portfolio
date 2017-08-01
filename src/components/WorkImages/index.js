import React, {Component} from 'react'
import { Image, Icon } from 'semantic-ui-react'
import "./workImage.css"

export default class WorkImage extends Component {

  render() {
      return (
        <div className="workImage">
          <div className="image_wrap"><Image
            fluid
             src={this.props.src}
             as='a'
             href={this.props.link}
             target='_blank'
           /></div>
           <div className="project_info">
            <p className="project_name">{this.props.name}</p>
            <p className="project_language">{this.props.language}</p>
            <p className="project_description">{this.props.description}</p>
           </div>
        </div>
      )
  }
}
