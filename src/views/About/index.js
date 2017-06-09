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
          <p className="blue"> I'm a Full-Stack Web Developer based in New York. I
            work with a broad range of languages and frameworks - including React, Ruby, Rails, Node, Express, Ember and several more. I love creating
            clean, responsive websites for the world to use.
          </p>
          <div id="description">
            <p> <img id="my_pic" src='../../itsame.png' />I'm a former English major turned Law School Student turned Entrepeneur turned Developer. What does that
              mean for you? Well, I've got the kind of diverse background you want for your dynamic projects.
            </p>
            <p>I'm also a big fan of sci-fi thrillers and dystopian fiction.
             I'm re-reading the Dune series right now, which is one of my all-time favorites.
            </p>
            <p>Want to work together? Feel free to contact me!</p>
            <p>Learn More...</p>
          </div>
        </div>
        </div>
       </CSSTransitionGroup>
    )
  }
}
