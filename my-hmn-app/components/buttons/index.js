import React from 'react'

class Buttons extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="buttons-wrapper">
        <button className="button" type="submit" onClick="">
          UPDATE
        </button>
        <button className="button" onClick="">
          CANCEL
        </button>

        <style jsx>{`
          .buttons-wrapper {
            bottom: 0;
            display: flex;
            flex: 1;
            padding: 0 20px 0 20px;
            bottom: 0;
          }
          .button {
            padding: 10px;
            font-size: 10px;
            border-radius: 3px;
            flex: 1;
            margin-right: 10px;
          }
          .button[type='submit'] {
            background-color: #fbbd09;
            color: #472661;
          }
        `}</style>
      </div>
    )
  }
}

export default Buttons
