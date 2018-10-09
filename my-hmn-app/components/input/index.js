import React from 'react'

class Input extends React.Component {
  constructor(props) {
    super(props)

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    this.setState({ title: event.target.value })
  }

  render() {
    return (
      <div className="input-wrapper">
        <input
          type="text"
          placeholder="Nickname"
          name="nickname"
          value="Molly Smith"
          onChange={this.handleChange.bind(this)}
        />
        <input
          type="text"
          placeholder="Email"
          name="email"
          value="mollysmith@gmail.com"
          onChange={this.handleChange.bind(this)}
        />

        <style jsx>{`
          .input-wrapper {
            padding: 20px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            color: #797a7e;
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

export default Input
