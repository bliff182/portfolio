import React, { Component } from "react";
// import "../profilepic.jpg";

export default class About extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="about">
        <div className="row">
          <div className="three columns">
            <img
              className="profile-pic"
              src="./images/profile_pic.JPEG"
              // src="../profilepic.jpg"
              alt="Profile Photo"
            />
          </div>

          <div className="nine columns main-col">
            <h2>About Me</h2>
            <p>{resumeData.aboutme}</p>

            <div className="row">
              <div className="columns contact-details">
                <h2>Contact Me</h2>
                <p className="address">
                  {/* <span>{resumeData.name}</span> */}
                  {/* <br></br> */}
                  <span>{resumeData.address}</span>
                  <br></br>
                  <span>{resumeData.website}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
