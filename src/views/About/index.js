import React, {Component} from 'react'
import { CSSTransitionGroup } from 'react-transition-group'
import { Segment, Image, Header } from 'semantic-ui-react'
import {Link} from 'react-router-dom'
import './about.css'

const src = '../itsame.png'
const handleClick = () => {
  var myArray = ["Howdy!", "Pleasure to meet ya'.", "Huh? You needed something?", "Clicking buttons is fun, wheee.",
  "Hah. Bet you thought this didn't do anything!", "Don't let your dreams be dreams!"]
  var rand = myArray[Math.floor(Math.random() * myArray.length)];
  alert(rand)
}

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

      <div className="page_wrapper">
        <Header id="about_header" as='h3'>
          About Me
        </Header>

        <div className="line-separator"></div>
        
        <Segment id="about_me">
          <Image
            id="my_pic"
            fluid
            label={{ as: 'a', corner: 'left', icon: 'comment', color: 'blue', onClick: handleClick }}
            src={src}
            size="small"
            floated='left' />
          <p className="blue">Hey there! I'm Mike.</p>
          <p>
            I'm a Full-Stack Web Developer based in New York. I
            work with a broad range of languages and frameworks - including React, Ruby, Rails, Node, Express, Ember and several more. I love creating
            clean, responsive websites for the world to use.
          </p>
           <p className="blue">My Background</p>
          <p>
            I'm a former English major turned Law School Prospect turned Entrepeneur turned Developer. What does that
            mean for you? Well, I've got the kind of diverse background you want for your dynamic projects. I'm also a
            guy who can communicate and work alongside a team, present demos and project iterations to managers, and
            consult with clients and partners about the work I'm doing.
          </p>
             <p className="blue">"What do you do for fun?"</p>
          <p>
            I'm a big fan of sci-fi thrillers and dystopian fiction. I'm re-reading the Dune series right now, which is one of my all-time favorites.
            I'm currently spending a bunch of my time learning react native so I can create an app idea I've had for years! (It's a secret for now, but it'll
            be awesome, trust me.)
          </p>
          <p className="blue">Wanna Work Together?</p>
          <p>Sounds like a plan! Feel free to check out my <Link id="contact_link" to="/contact">contact page</Link> so we can get in touch!</p>
        </Segment>
        </div>
       </CSSTransitionGroup>
    )
  }
}
