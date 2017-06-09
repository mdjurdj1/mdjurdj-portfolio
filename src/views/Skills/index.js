import React, {Component} from 'react'
import { CSSTransitionGroup } from 'react-transition-group'
import './skills.css'

export default class Skills extends Component {
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
        <h1>SKILLS</h1>
      </CSSTransitionGroup>
    )
  }
}
