import React, { Component } from "react";
export default class Porfolio extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="portfolio">
        <div className="row">
          <div className="twelve columns collapsed">
            <h1 style={{ color: "#000000", fontWeight: "bolder" }}>
              Check Out Some of My Projects.
            </h1>
            <div
              id="portfolio-wrapper"
              className="bgrid-quarters s-bgrid-thirds cf"
            >
              {resumeData.portfolio &&
                resumeData.portfolio.map((item) => {
                  return (
                    <div className="columns portfolio-item">
                      <a
                        href={item.projurl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <div className="item-wrap">
                          {/* <a href={item.projurl}> */}
                          <img
                            src={`${item.imgurl}`}
                            className="item-img"
                            alt={item.name}
                          />
                          <div className="overlay">
                            <div className="portfolio-item-meta">
                              <h5>{item.name}</h5>
                              <p>{item.description}</p>
                            </div>
                          </div>
                          {/* </a> */}
                        </div>
                      </a>
                      <a
                        href={item.ghurl}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: "black" }}
                      >
                        <strong>
                          View on Github <i className="fa fa-github"></i>
                        </strong>
                      </a>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </section>
    );
  }
}
