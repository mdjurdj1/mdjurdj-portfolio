import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import './home.min.css'
import $ from 'jquery';

export default class Home extends Component {

  componentDidMount() {
    $('.txt').html(function(i, html) {
      var chars = $.trim(html).split("");
      return '<span>' + chars.join('</span><span>') + '</span>';
    });
  }

  render() {
    return (
      <div className="container">
        <span className="txt anim-text-flow">Michael Djurdjevic</span>
        <p className="regTxt">Web Developer</p>
        <div className="description">
          <div className="line-separator"></div>
            <p className="regTxt">
              <Link to="/about">About</Link>   ·    Skills    ·     My Work   ·   Contact
            </p>
          </div>
      </div>
    )
  }
}
