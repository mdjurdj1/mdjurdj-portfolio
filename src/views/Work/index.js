import React, {Component} from 'react'
import { CSSTransitionGroup } from 'react-transition-group'
import WorkImagesContainer from '../../containers/WorkImagesContainer'
import { Icon, Header } from 'semantic-ui-react'

import NavArrowLeft from '../../components/NavArrowLeft'
import Footer from '../../components/Footer'
import Menu from '../../components/Menu'
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

        <Menu />
        <NavArrowLeft />

        <div className="page_wrapper work">
          <Header id="work_header" as='h3'>
              Web Portfolio
          </Header>

          <div className="line-separator"></div>

          <p id="about_work">From Ruby CLI Gems to Responsive, Full-Stack React-Redux applications - check out my latest projects! I'm constantly building
          and creating new things, so there's always more to come. If you want to look at some of my coding history, feel free to browse my&nbsp;
          <a href="https://github.com/mdjurdj1"><span id="github_link">Github!   <Icon name="github" /></span></a>
          </p>
        </div>

      <div id="work_wrapper">
        <WorkImagesContainer />
      </div>

      </CSSTransitionGroup>
    )
  }
}
