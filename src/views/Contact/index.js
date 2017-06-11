import React, {Component} from 'react'
import { CSSTransitionGroup } from 'react-transition-group'
import { Segment, Image, Header, Icon, Button } from 'semantic-ui-react'
import {Link} from 'react-router-dom'
import NavArrowLeft from '../../components/NavArrowLeft'
import './contact.css'

export default class Contact extends Component {
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

      <NavArrowLeft />

      <div className="page_wrapper contact">
        <Header id="about_header" as='h3'>
          Get In Touch
        </Header>

        <div className="line-separator"></div>

        <Segment id="contact_me">
          <p className="blue">Wanna speak with me about a project or idea you have? Need to hire a new developer?</p>
          <p><Icon name="mail outline"/> Email me at <span className="blue">mdjurdj1@gmail.com</span> and lets talk! </p>

          <div id="socials">
            <p>Or, we can get social!</p>
            <a href="https://www.linkedin.com/in/mjurdj1/"><Button color='linkedin'>
              <Icon name='linkedin' /> LinkedIn
            </Button></a>
            <a href="https://github.com/mdjurdj1"><Button color='grey'>
              <Icon name='github' /> GitHub
            </Button></a>
            <a href="https://www.facebook.com/michael.djurdjevic.1"><Button color='facebook'>
              <Icon name='facebook' /> Facebook
            </Button></a>
          </div>

        </Segment>
        </div>
       </CSSTransitionGroup>
    )
  }
}
