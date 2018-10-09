import React from 'react'

class EditModalWrapper extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      show: false
    }

    this.showModal = this.showModal.bind(this)
    this.hideModal = this.hideModal.bind(this)
  }

  showModal() {
    this.setState({ show: true })
  }

  hideModal() {
    this.setState({ show: false })
  }

  render() {
    return (
      <div className="title-wrapper">
        <div className="title">
          <span>Update Membership</span>
        </div>
        <div className="close" onClick={this.hideModal}>
          <span>X</span>
        </div>

        <style jsx>{`
          .title-wrapper {
            padding: 20px;
            display: flex;
            justify-content: space-between;
            border-bottom: 1px solid #efefef;
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

export default EditModalWrapper
