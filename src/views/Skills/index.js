import React, {Component} from 'react'
import { CSSTransitionGroup } from 'react-transition-group'
import { Grid, Image, Header } from 'semantic-ui-react'

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

        <div id="viewContainer">
          <Header id="skills_header" as='h3'>
            About Me
          </Header>

          <div id="viewContent">
            <p>Though I primarily work with JavaScript and JavaScript-based stacks, Im more than familiar with a number
            of other languages, frameworks, and libraries. Picking up a new framework or language is no issue! Here are just some of my
            favorites...</p>

            <div id="skillsWrapper">
              <div className="skillsBox">
                <p className="blue header">Front End</p>
                <ul>
                  <li> <img className="logo" src="../reactLogo.png"/> React & React-Redux</li>
                  <li> <img className="logo" src="../jquery.png"/> Jquery</li>
                  <li> <img className="logo" src="../angular.png"/> Angular & Ember</li>
                  <li> <img className="logo" src="../html5.png"/> HTML5</li>
                  <li> <img className="logo" src="../css3.png"/> CSS3</li>
                  <li> <img className="logo" src="../wordpress.png"/> WordPress & Drupal</li>
                  <li> <img className="logo" src="../photoshop.png"/> Photoshop</li>
                </ul>
              </div>

              <div className="skillsBox" id="skills2">
                <p className="blue header">Back End</p>
                <ul>
                  <li> <img className="logo" src="../ruby.png"/> Ruby</li>
                  <li> <img className="logo" src="../rails.png"/> Ruby-on-Rails</li>
                  <li> <img className="logo" src="../javascript.png"/> JavaScript</li>
                  <li> <img className="logo" src="../sql.png"/> PostgreSQL & MongoDB</li>
                  <li> <img className="logo" src="../nodejs.png"/> Node.Js</li>
                  <li> <img className="logo" src="../express.png"/> Express</li>
                  <li> <img className="logo" src="../rest.png"/> REST/SOAP</li>
                </ul>
              </div>
            </div>

          </div>
        </div>

      </CSSTransitionGroup>
    )
  }
}
