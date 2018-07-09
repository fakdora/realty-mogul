import React from 'react'
import { connect } from 'react-redux'
import { Divider } from 'semantic-ui-react'

import Content from './Content'


function ContentList({ contents } ) {
  return (
    <div className="contents-list">
      {
        (contents)
          ? contents.map(content => (
            <div key={content.id} >
              <Content content={content} />
              <Divider />
            </div>
            ))
          : null
      }
    </div>
  )
}

function mapStateToProps({ contents }) {
  return {
    contents
  }
}

export default connect(mapStateToProps)(ContentList)
