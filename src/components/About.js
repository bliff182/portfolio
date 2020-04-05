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
                  <span>
                    <a
                      href="mailto:michael.bither@gmail.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {resumeData.address}
                    </a>
                  </span>
                  <br></br>
                  <span>
                    <a
                      href={resumeData.website}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {resumeData.website}
                    </a>
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
