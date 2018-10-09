import React from 'react'

class Buttons extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="buttons-wrapper">
        <button onClick="">Update</button>
        <button onClick="">Cancel</button>

        <style jsx>{`
          .buttons-wrapper {
            bottom: 0;
            display: flex;
            justify-content: space-between;
            bottom: 0;
          }
          .title {
            margin: 0;
            width: 100%;
            line-height: 1.15;
            font-size: 16px;
          }
          ,
          .close {
            padding-right: 7px;
            right: 0;
            top: 0;
          }
        `}</style>
      </div>
    )
  }
}

export default Buttons
