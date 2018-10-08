import React from 'react'
import Panel from '../components/panel'

const Home = () => (
  <div>
    <div className="main">
      <div className="panel-container">
         <div className="panel-wrapper" >
              <Panel />
         </div>
    </div>
    </div>

    <style jsx>{`
      .main {
        width: 1200px;
        margin-top: 20px;
        height: auto;
        margin : 0 auto;
        background-color: #efefef;
      }
      .panel-container {
        position:relative;
        background:url('../static/images/bg.png') no-repeat;
        height: 920px;
      }
      .panel-wrapper {
        bottom:20px;
        position: absolute;
        width:548px;
        height: 195px;
        left: 50px;
        background-color: #ffffff
      }
    `}</style>
  </div>
)

export default Home
