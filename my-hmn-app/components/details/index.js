import React from 'react'


const Details = () => (
  <div className="details-wrapper">
    <div className="">
      <span className="" >NICKNAME</span>
      <span className="" >Molly Smith</span>
    </div>
    <div className="">
      <span>EMAIL</span>
      <span>mollysmith@gmail.com</span>
    </div>


    <style jsx>{`
      .details-wrapper {
        display: flex;
        margin-top: 10px;
        justify-content: space-between;
      }
      .key-label{

      }
      .value-data{
      }
    `}</style>

  </div>
);

export default Details;