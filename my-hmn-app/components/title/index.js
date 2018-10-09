import React from 'react'
import Modal from 'react-modal'
import EditModalWrapper from '../edit-modal'
import Input from '../input'
import Buttons from '../buttons'

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: '300px',
    height: '300px',
    padding: '0'
  }
}

class Title extends React.Component {
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
          <span>Membership</span>
        </div>
        <div className="edit" onClick={this.showModal}>
          <span>Edit</span>
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
            font-size: 18px;
            color: #6d6d6f;
          }
          ,
          .edit {
            padding-right: 7px;
            right: 0;
            top: 0;
          }
        `}</style>
        <Modal
          isOpen={this.state.show}
          handleClose={this.hideModal}
          style={customStyles}
        >
          <EditModalWrapper />
          <Input />
          <Buttons />
        </Modal>
      </div>
    )
  }
}

export default Title
