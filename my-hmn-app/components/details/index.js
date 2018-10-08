import React from 'react'


const Details = () => (
  <div className="details-wrapper">
    <div className="wrapper">
      <span className="key-label" >NICKNAME</span>
      <span className="value-data" >Molly Smith</span>
    </div>
    <div className="wrapper">
      <span className="key-label">EMAIL</span>
      <span className="value-data">mollysmith@gmail.com</span>
    </div>


    <style jsx>{`
      .details-wrapper {
        display: flex;
        margin-top: 10px;
        padding: 20px;
        flex-direction: column
      }
      .wrapper{
        display: flex;
        padding-bottom: 10px;
      }
      .key-label{
        width: 40%;
        color: #797A7E;
      }
      .value-data{
        color: #472661;
      }
    `}</style>

  </div>
);

export default Details;