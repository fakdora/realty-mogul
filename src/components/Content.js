import React, { Component } from 'react'
import Panel from './Panel'
import Header from './Header'


class Content extends Component {
  state = {
    'showPanelA': true,
    'showPanelB': false,
    'content': this.props.content,
  }

  handleClickPanelToggle = () => {
    this.setState(prevState => ({
      showPanelA: !prevState.showPanelA,
      showPanelB: !prevState.showPanelB,
    }))
  }

  render() {
    const { content, showPanelA, showPanelB } = this.state
    const { headerData, contentA, contentB } = content

    return (
      <div>    
        <Header headerData={headerData} />
        
        <Panel 
          panelData={contentA} 
          visibility={showPanelA} 
          userClickHandler={this.handleClickPanelToggle}
        />

        <Panel 
          panelData={contentB} 
          visibility={showPanelB} 
          userClickHandler={this.handleClickPanelToggle}
        />
      </div>
    )
  }
}

export default Content