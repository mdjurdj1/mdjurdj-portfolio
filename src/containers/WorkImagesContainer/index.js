import React, {Component} from 'react'
import WorkImage from '../../components/WorkImages'
import { Grid } from 'semantic-ui-react'
import "./workImagesContainer.css"

export default class WorkImagesContainer extends Component {
  render() {
    return (
      <div>
        <div className="work_row">
          <WorkImage name={"Minitube"} icon={"desktop"} language={"React"} src={"../miniTube.jpg"} link={"https://mini-tube-client.herokuapp.com"}/>
          <WorkImage name={"Appointable"} icon={"youtube play"} language={"Rails"} src={"../appointable.png"} link={'https://www.youtube.com/watch?v=Y73TIgQ_AR8'}/>
          <WorkImage name={"DJ's Computer Repairs"} icon={"desktop"} language={"React"} src={"../djcr.jpg"} link={"http://DJsComputerRepair.com"} />
        </div>

        <div className="work_row">
          <WorkImage name={"Gains-Tracker"} icon={"youtube play"} src={"../gainstracker.png"} language={"Sinatra"} link={"https://www.youtube.com/watch?v=_NUHQjUVIEM&feature=youtu.be"} />
          <WorkImage name={"Gameday CLI Gem"} icon={"youtube play"} language={"Ruby"} src={"../gameday.jpg"} link={"https://www.youtube.com/watch?v=EJW2hNurpHk"} />
          <WorkImage name={"Code && Coffee"} icon={"desktop"} language={"Blog"} src={"../blog.jpg"} link={"http://mdjurdj.com"} />
       </div>
     </div>
    )
  }
}
