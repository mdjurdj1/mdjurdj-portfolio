import React, {Component} from 'react'
import WorkImage from '../../components/WorkImages'
import { Grid } from 'semantic-ui-react'
import "./workImagesContainer.css"

const project_descriptions = [
  "A freelance website designed for Shears Salon & Designs. New York. Built using React, Redux, and HTML5/CSS3.",
  "A sleek, react-redux based. minimalist youtube browser that persists user data and playlists via the youtube API.",
  "An extensive CMS that tracks user appointments, contacts, and business locations in a secure database.",
  "An Angular-based single-page application with a fully-featured gulpfile, routing, and google maps API integration.",
  "A simple workout tracker built on the streamlined Sinatra framework with a SQLite3 database.",
  "A published Ruby gem which utilizes Nokogiri to scrape sports webpages for upcoming events.",
  "A react-based single-page application for a small, family owned computer repair business.",
  "My personal blog, speaking on my journey as a professional developer and the languages I love most."
]

export default class WorkImagesContainer extends Component {
  render() {
    return (
      <div>
        <div className="work_row">
          <WorkImage name={"Shears NYC Salon"} icon={"desktop"} language={"React · CSS3"} src={"../shears.jpg"} description={project_descriptions[0]} link={"https://shears.herokuapp.com"} />
          <WorkImage name={"Minitube"} icon={"desktop"} language={"React · Redux"} src={"../miniTube.jpg"} description={project_descriptions[1]} link={"https://mini-tube-client.herokuapp.com"}/>
          <WorkImage name={"DJ's Kitchen & Bar"} icon={"desktop"} language={"Angular"} src={"../ng_rest.jpg"} description={project_descriptions[2]} link={"http://Dj-kitchen.herokuapp.com"} />
        </div>

        <div className="work_row">
          <WorkImage name={"Appointable"} icon={"youtube play"} language={"Rails · Jquery"} src={"../appointable.png"} description={project_descriptions[1]} link={'https://www.youtube.com/watch?v=Y73TIgQ_AR8'}/>
          <WorkImage name={"Gains-Tracker"} icon={"youtube play"} src={"../gainstracker.png"} language={"Sinatra"} description={project_descriptions[3]} link={"https://www.youtube.com/watch?v=_NUHQjUVIEM&feature=youtu.be"} />
          <WorkImage name={"DJ's Computer Repairs"} icon={"desktop"} language={"React"} src={"../djcr.jpg"} description={project_descriptions[5]} link={"http://DJsComputerRepair.com"} />
       </div>

       <div className="work_row">
         <WorkImage name={"Gameday CLI Gem"} icon={"youtube play"} language={"Ruby"} src={"../gameday.jpg"} description={project_descriptions[4]} link={"https://www.youtube.com/watch?v=EJW2hNurpHk"} />
         <WorkImage name={"Code && Coffee"} icon={"desktop"} language={"My Blog"} src={"../blog.jpg"} description={project_descriptions[6]} link={"http://mdjurdj.com"} />
      </div>
     </div>
    )
  }
}
