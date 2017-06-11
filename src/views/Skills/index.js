import React, {Component} from 'react'
import { CSSTransitionGroup } from 'react-transition-group'
import { Header } from 'semantic-ui-react'
import NavArrowLeft from '../../components/NavArrowLeft'
import Menu from '../../components/Menu'

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

      <Menu />
      <NavArrowLeft />

        <div className="page_wrapper">
          <Header id="skills_header" as='h3'>
            Skills
          </Header>

        <div className="line-separator"></div>

          <div id="skillsContent">
            <p id="skills_text">Though I primarily work with JavaScript and JavaScript-based stacks, Im more than familiar with a number
            of other languages, frameworks, and libraries. Picking up a new framework or language is no issue! Here are just some of my
            favorites...</p>

            <div id="skillsWrapper">
              <div className="skillsBox" id="skills1">
                <p className="blue header">Front End</p>
                <ul>
                  <li> <img className="logo" alt="" src="../reactLogo.png"/> React & React-Redux</li>
                  <li> <img className="logo" alt="" src="../jquery.png"/> Jquery</li>
                  <li> <img className="logo" alt="" src="../angular.png"/> Angular & Ember</li>
                  <li> <img className="logo" alt="" src="../html5.png"/> HTML5</li>
                  <li> <img className="logo" alt="" src="../css3.png"/> CSS3</li>
                  <li> <img className="logo" alt="" src="../wordpress.png"/> WordPress & Drupal</li>
                  <li> <img className="logo" alt="" src="../photoshop.png"/> Photoshop</li>
                </ul>
              </div>

              <div className="skillsBox" id="skills2">
                <p className="blue header">Back End</p>
                <ul>
                  <li> <img className="logo" alt="" src="../ruby.png"/> Ruby</li>
                  <li> <img className="logo" alt="" src="../rails.png"/> Ruby-on-Rails</li>
                  <li> <img className="logo" alt="" src="../javascript.png"/> JavaScript</li>
                  <li> <img className="logo" alt="" src="../sql.png"/> PostgreSQL & MongoDB</li>
                  <li> <img className="logo" alt="" src="../nodejs.png"/> Node.Js</li>
                  <li> <img className="logo" alt="" src="../express.png"/> Express</li>
                  <li> <img className="logo" alt="" src="../rest.png"/> REST/SOAP</li>
                </ul>
              </div>
            </div>

          </div>
        </div>

      </CSSTransitionGroup>
    )
  }
}
