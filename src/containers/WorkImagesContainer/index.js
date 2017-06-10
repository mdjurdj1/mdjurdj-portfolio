import React, {Component} from 'react'
import WorkImage from '../../components/WorkImages'
import { Grid, Image } from 'semantic-ui-react'
import "./workImagesContainer.css"

export default class WorkImagesContainer extends Component {
  render() {
    return (
        <Grid>
         <Grid.Row columns={3}>
           <Grid.Column>
             <WorkImage name={"Minitube"} src={"../miniTube.jpg"} link={"https://mini-tube-client.herokuapp.com"}/>
           </Grid.Column>
           <Grid.Column>
              <WorkImage name={"Appointable"} src={"../appointable.png"} link={'https://www.youtube.com/watch?v=Y73TIgQ_AR8'}/>
           </Grid.Column>
           <Grid.Column>
              <WorkImage name={"DJ's Computer Repairs"} src={"../djcr.jpg"} link={"https://DJsComputerRepair.com"} />
           </Grid.Column>
        </Grid.Row>

        <Grid.Row columns={3}>
          <Grid.Column>
            <WorkImage name={"Gains-Tracker"} src={"../gainstracker.png"} link={"https://www.youtube.com/watch?v=_NUHQjUVIEM&feature=youtu.be"} />
          </Grid.Column>
          <Grid.Column>
             <WorkImage name={"Gameday CLI Gem"} src={"../gameday.jpg"} link={"https://www.youtube.com/watch?v=EJW2hNurpHk"} />
          </Grid.Column>
          <Grid.Column>
             <WorkImage name={"Code && Coffee"} src={"../blog.jpg"} link={"http://mdjurdj.com"} />
          </Grid.Column>
       </Grid.Row>
      </Grid>
    )
  }
}
