import React from 'react'

class Input extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      nickname: '',
      email: ''
    }

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    this.setState({ nickname: event.target.value })
  }

  render() {
    return (
      <div className="input-wrapper">
        <input
          type="text"
          className="input-box"
          defaultValue={this.state.nickname}
          placeholder="Nickname"
          name="nickname"
          onChange={this.handleChange.bind(this)}
        />

        <input
          type="text"
          className="input-box"
          defaultValue={this.state.email}
          placeholder="Email"
          name="email"
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
          .input-box {
            padding: 5px;
            margin-bottom: 20px;
            font-size: 14px;
          }
        `}</style>
      </div>
    )
  }
}

export default Input
