import React, {Component} from 'react'
import WorkImage from '../../components/WorkImages'
import { Grid, Image } from 'semantic-ui-react'
import "./workImagesContainer.css"

export default class WorkImagesContainer extends Component {
  render() {
    return (
        <Grid >
         <Grid.Row columns={2}>
           <Grid.Column>
             <WorkImage name={"Minitube"} icon={"desktop"} language={"React"} src={"../miniTube.jpg"} link={"https://mini-tube-client.herokuapp.com"}/>
           </Grid.Column>
           <Grid.Column>
              <WorkImage name={"Appointable"} icon={"youtube play"} language={"Rails"} src={"../appointable.png"} link={'https://www.youtube.com/watch?v=Y73TIgQ_AR8'}/>
           </Grid.Column>
        </Grid.Row>

        <Grid.Row columns={2}>
            <Grid.Column>
               <WorkImage name={"DJ's Computer Repairs"} icon={"desktop"} language={"React"} src={"../djcr.jpg"} link={"http://DJsComputerRepair.com"} />
            </Grid.Column>
            <Grid.Column>
              <WorkImage name={"Gains-Tracker"} icon={"youtube play"} src={"../gainstracker.png"} language={"Sinatra"} link={"https://www.youtube.com/watch?v=_NUHQjUVIEM&feature=youtu.be"} />
            </Grid.Column>
        </Grid.Row>

        <Grid.Row columns={2}>
          <Grid.Column>
             <WorkImage name={"Gameday CLI Gem"} icon={"youtube play"} language={"Ruby"} src={"../gameday.jpg"} link={"https://www.youtube.com/watch?v=EJW2hNurpHk"} />
          </Grid.Column>
          <Grid.Column>
             <WorkImage name={"Code && Coffee"} icon={"desktop"} language={"Blog"} src={"../blog.jpg"} link={"http://mdjurdj.com"} />
          </Grid.Column>
       </Grid.Row>
      </Grid>
    )
  }
}
