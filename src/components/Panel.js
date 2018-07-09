import React from 'react'
import { Grid } from 'semantic-ui-react'


function Panel({panelData, userClickHandler, visibility}) {
    return (
      <Grid.Column width={8}>
        <div
          style={{ backgroundColor: visibility ? "#FFFFFF" : '#EEEEEE' }}
          className="panel-block"
          onClick={userClickHandler}>
          <div className="panel-data">
            {visibility ? panelData : null}
          </div>
        </div>
      </Grid.Column>
    )
  }

export default Panel
