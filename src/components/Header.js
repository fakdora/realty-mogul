import React from 'react'
import { Grid, Icon, Segment } from 'semantic-ui-react'


function Header({ headerData, showContent, handleButtonClick }) {

  return (
    <div className="header-text">
      <Grid columns={4}>
        <Grid.Column>
          <Segment vertical={true} className="header-segment">
            {headerData[0]}
          </Segment>
        </Grid.Column>
        <Grid.Column>
          <Segment basic vertical={true} className="header-segment">
              <p>{headerData[1]}</p>
            </Segment>
        </Grid.Column>
          <Grid.Column>
          <Segment basic vertical={true} className="header-segment">
              <p>{headerData[2]}</p>
            </Segment>
          </Grid.Column>
          <Grid.Column>
          <Segment basic vertical={true} className="header-segment">
            {showContent
              ? <Icon name="minus" 
                  circular color="black" 
                  onClick={handleButtonClick}/>
              : <Icon name="plus" circular 
                  inverted color="teal" 
                  onClick={handleButtonClick} />
              }
            </Segment>
          </Grid.Column>
      </Grid>
    </div>
  )
}

export default Header
