import React from 'react'


class Header extends React.Component {
  state = {
    showHeader: true
  }

  handleUserShowHeader = () => {
    this.setState(prevState => ({
      showHeader: !prevState.showHeader
    }))
  }

  render() {
    const { headerData } = this.props
    const { showHeader } = this.state

    return (
      <div>
        <div>
          {showHeader ? headerData : null}
          <button onClick={this.handleUserShowHeader}>
            {showHeader ? '-' : '+'}
          </button>
        </div>
      </div>
    )
  }
}

export default Header
