import React, {Component} from 'react'
import { CSSTransitionGroup } from 'react-transition-group'
import WorkImagesContainer from '../../containers/WorkImagesContainer'
import './work.css'

export default class Work extends Component {
  render() {
    return (
      <CSSTransitionGroup
        transitionName="example"
        transitionAppear={true}
        transitionAppearTimeout={900}
        transitionEnter={true}
        transitionEnterTimeout={900}
        transitionLeave={true}
        transitionLeaveTimeout={900}>

        <div id="viewContainer">
          <header id="about_header">
            <h3>My Work</h3>
            <div className="line-separator"></div>
          </header>
        </div>

        <WorkImagesContainer />

      </CSSTransitionGroup>
    )
  }
}
