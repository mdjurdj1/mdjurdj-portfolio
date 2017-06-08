import React, {Component} from 'react'
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
          <p className="regTxt">About   ·    Skills    ·     Projects   ·   Contact</p>
        </div>
      </div>
    )
  }
}
