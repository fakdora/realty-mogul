import React from 'react'


function Panel({panelData, userClickHandler, visibility}) {
    return (
      <div
        style={{ backgroundColor: visibility ? "#FFFFFF" : '#EEEEEE' }}
        className="panel-block"
        onClick={userClickHandler}
      >
        {visibility ? panelData : null}
      </div>
    )
  }

export default Panel
