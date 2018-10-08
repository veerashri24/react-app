import React from 'react'


const Title = () => (
  <div className="title-wrapper">
    <div className="title">
      <span>Membership</span>
    </div>
    <div className="edit">
          <span>Edit</span>
    </div>


    <style jsx>{`
      .title-wrapper {
        padding: 20px;
        display: flex;
        justify-content: space-between;
        border-bottom : 1px solid #efefef;
        color: #797A7E;
      }
      .title {
        margin: 0;
        width: 100%;
        line-height: 1.15;
        font-size: 16px;
      },
      .edit {
	      padding-right: 7px;
	      right: 0;
	      top: 0;
      }
    `}</style>

  </div>
);

export default Title;