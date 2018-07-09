import React, { Component } from 'react'
import Panel from './Panel'
import Header from './Header'
import { Container, Grid } from 'semantic-ui-react'

class Content extends Component {
  state = {
    'showPanelA': true,
    'showPanelB': false,
    'content': this.props.content,
    'showContent': true,
  }

  handleClickToggleDisplayPanel = () => {
    this.setState(prevState => ({
      showPanelA: !prevState.showPanelA,
      showPanelB: !prevState.showPanelB,
    }))
  }

  handleClickToggleDisplayContent = () => {
    this.setState(prevState => ({
      showContent: !prevState.showContent
    }))
  }

  render() {
    const { content, showPanelA, showPanelB, showContent } = this.state
    const { headerData, contentA, contentB } = content

    return (
      <div className="content-block">    
        <Container>
          <Header 
            headerData={headerData}
            showContent={showContent}
            handleButtonClick={this.handleClickToggleDisplayContent}
            />

          {showContent
            ?
              <div>
                <Grid>
                  <Panel
                    panelData={contentA}
                    visibility={showPanelA}
                    userClickHandler={this.handleClickToggleDisplayPanel}
                  />
                  <Panel
                    panelData={contentB}
                    visibility={showPanelB}
                    userClickHandler={this.handleClickToggleDisplayPanel}
                  />
                </Grid>
              </div>
            : <div></div>
          }
        </Container>
      </div>
    )
  }
}

export default Content