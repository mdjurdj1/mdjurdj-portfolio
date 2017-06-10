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
             <WorkImage name={"Minitube"} src={"../miniTube.jpg"} />
           </Grid.Column>
           <Grid.Column>
              <WorkImage name={"Appointable"} src={"../appointable.png"} />
           </Grid.Column>
           <Grid.Column>
              <WorkImage name={"DJ's Computer Repairs"} src={"../djcr.jpg"} />
           </Grid.Column>
        </Grid.Row>

        <Grid.Row columns={3}>
          <Grid.Column>
            <WorkImage name={"Gains-Tracker"} src={"../gainstracker.png"} />
          </Grid.Column>
          <Grid.Column>
             <WorkImage name={"Gameday CLI Gem"} src={"../gameday.jpg"} />
          </Grid.Column>
          <Grid.Column>
             <WorkImage name={"Appointable"} src={"../appointable.png"} />
          </Grid.Column>
       </Grid.Row>
      </Grid>
    )
  }
}
