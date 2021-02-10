import React, { Component } from "react";
import banner from "../../img/a.jpg";
export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      places: null,
    };
  }
  async componentDidMount() {
    this.loadPlaces();
  }

  async loadPlaces() {
    try {
      const res = await fetch("http://localhost:5000/admin/places/");
      const data = await res.json();
      //updateing state with lastest data
      this.setState({
        places: data,
      });
    } catch (e) {
      //if failed to communicate with api this code block will run
      console.log(e);
    }
  }

  render() {
    let placelist;

    if (this.state.places !== null) {
      placelist = this.state.places.map((place, key) => {
        return (
          //   <div key={key} className="card col-md-6 col-lg-4  m-4">
          //     <div>
          //       <img src={place.image} id="homeImg" className="mt-2 " alt="..." />
          //     </div>
          //     <div className="card-body">
          //       <h5 className="card-title">{place.name}</h5>
          //       <p className="card-text">{place.description}</p>
          //       <ul className="list-group list-group-flush">
          //         <li className="list-group-item"></li>
          //         <li className="list-group-item mx-auto">{place.venue}</li>
          //       </ul>
          //     </div>
          //   </div>

          <div className="col-md-6 col-lg-3">
            <div className="card col-12 m-1 p-0">
              <div id="homeImgBdr">
                <img
                  id="homeImg"
                  src={place.image}
                  className="card-img-top "
                  alt="..."
                ></img>
              </div>
              <div className="card-body" id="cardBody">
                <h5 className="card-title">{place.name}</h5>
                <p className="card-text">{place.description}</p>
                <a
                  href="#"
                  className={`btn btn-${place.COVID_status} float-right`}
                ></a>
              </div>
            </div>
          </div>
        );
      });
    }
    return (
      <div>
        <div>
          <div
            id="carouselExampleSlidesOnly"
            className="carousel "
            data-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img className="w-100" src={banner} alt="First slide" />
                <div className="carousel-caption pb-5 pt-0 m-0 align-center">
                  <h1 className="drop-shadow">TravelSL</h1>
                  <h5 className="drop-shadow  ">
                    Uncover hidden mysteries of nature around SRI LANKA..
                  </h5>
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="">
              <div className="row mx-auto">{placelist}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
