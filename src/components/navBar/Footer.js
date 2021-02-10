import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    return (
      <div className="bg-primary mt-4">
        <div className="container bg-primary pb-3 pt-1">
          <div className="mt-5 col-lg-8 mx-auto bg-primary row">
            <div className="col-md-6 col-lg-4">
              <p className="text-white">
                <button href="#" className="btn btn-success"></button> - Low
                Covid Risk Area
              </p>
            </div>
            <div className="col-md-6 col-lg-4">
              <p className="text-white">
                <button href="#" className="btn btn-warning"></button> - Medium
                Covid Risk Area
              </p>
            </div>
            <div className="col-md-6 col-lg-4">
              <p className="text-white">
                <button href="#" className="btn btn-danger "></button> - High
                Covid Risk Area
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
