import React, { Component } from 'react'
import { connect } from 'react-redux'

import Content from './Content'


class ContentList extends Component {

  render() {
    const { contents } = this.props

    return (
      <div className="contents-list">
        {
          (contents)
            ? contents.map(content => (
                <Content key={content.id} content={content} />
              ))
            : null
        }
      </div>
    )
  }
}

function mapStateToProps({ contents }) {
  return {
    contents
  }
}

export default connect(mapStateToProps)(ContentList)
