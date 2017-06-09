import React, {Component} from 'react'
import { CSSTransitionGroup } from 'react-transition-group'
import './about.css'

export default class About extends Component {
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
        <div id="aboutContainer">
          <header id="about_header">
            <h3>About Me</h3>
            <div className="line-separator"></div>
          </header>
        <div id="about_content">
          <p>Hey there! I'm Mike.</p>
          <p> I'm a Full-Stack Web Developer based in New York. I
            work with a broad range of languages and frameworks - including React, Ruby, Rails, Node, Express, Ember and several more. I love creating
            simple, responsive websites for the world to use.
          </p>
          <p> <img id="my_pic" src='../../itsame.png' /> I'm a former English major turned Law School Student turned Entrepeneur turned Developer. What does that
            mean for you? Well, I've got the kind of diverse background and focused work ethic you want for your team.
          </p>
          <p>Want to reach out and work together? Contact me here.</p>
        </div>
        </div>
       </CSSTransitionGroup>
    )
  }
}
