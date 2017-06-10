import React, {Component} from 'react'
import { CSSTransitionGroup } from 'react-transition-group'
import WorkImagesContainer from '../../containers/WorkImagesContainer'
import {Link} from 'react-router-dom'
import { Segment, Icon, Header } from 'semantic-ui-react'
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

        <div className="page_wrapper">
          <Header id="work_header" as='h3'>
              Web Portfolio
          </Header>

          <div className="line-separator"></div>

          <p id="about_work">From Ruby CLI Gems to Responsive React-Redux applications - check out my latest projects! I'm constantly building
          and creating new things, so there's always more to come. If you want to check out some of my coding history, feel free to browse my&nbsp;
          <Link to="https://github.com/mdjurdj1"><span>Github!   <Icon name="github" /></span></Link>
          </p>
        </div>

      <div id="work_wrapper">
        <WorkImagesContainer />
      </div>

      </CSSTransitionGroup>
    )
  }
}
