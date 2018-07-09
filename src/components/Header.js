import React from 'react'
import {
  Button,
  Grid,
  Icon,
  Segment,
} from 'semantic-ui-react'


class Header extends React.Component {

  render() {
    const { headerData, showContent, handleButtonClick } = this.props

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
                <Button icon onClick={handleButtonClick}>
                  {showContent ?
                    <Icon name='minus' /> :
                    <Icon name='plus' />}
                </Button>
              </Segment>
            </Grid.Column>
        </Grid>
        
      </div>
    )
  }
}

export default Header
