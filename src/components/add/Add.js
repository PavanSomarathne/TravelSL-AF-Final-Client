import React, { Component } from "react";
import Auth from "../../Authentication/Auth";

class Add extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      description: "",
      COVID_status: "success",
      places: null,
      image: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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

  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  }

  async handleSubmit(event) {
    event.preventDefault();
    console.log(this.state);
    if (this.state.name.trim() !== 0) {
      try {
        const requestOptions = {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            token: Auth.getToken(),
          },
          body: JSON.stringify({
            name: this.state.name,
            description: this.state.description,
            COVID_status: this.state.COVID_status,
            image: this.state.image,
          }),
        };
        await fetch("http://localhost:5000/admin/new-place", requestOptions);
        this.loadPlaces();
        this.setState({
          name: "",
          description: "",
          COVID_status: "",
          image: "",
        });
        alert("Aded successfully!");
      } catch (e) {
        console.log(e);
      }
    }
  }

  async deletePlace(id) {
    try {
      const requestOptions = {
        method: "DELETE",
        headers: { "Content-Type": "application/json", token: Auth.getToken() },
        body: JSON.stringify({ id: id }),
      };
      await fetch("http://localhost:5000/admin/places", requestOptions);
      alert("Deleted");
      this.loadPlaces();
    } catch (e) {
      console.log(e);
    }
  }

  render() {
    let placelist;

    if (this.state.places !== null) {
      placelist = this.state.places.map((place, key) => {
        return (
          <ul key={key} className="list-group list-group-flush">
            <li className="list-group-item"> </li>
            <div className="row m-2">
              <h4 className="col-10">
                {key + 1} . {place.name}
              </h4>{" "}
              <button
                type=""
                className="btn btn-danger col-1 "
                onClick={(e) => {
                  if (
                    window.confirm("Are you sure you wish to delete this item?")
                  )
                    this.deletePlace(place._id);
                }}
              >
                Delete
              </button>
            </div>
          </ul>
        );
      });
    }
    return (
      <div className="container">
        <div className="row">
          <form className="mt-5 col-lg-8 mx-auto" onSubmit={this.handleSubmit}>
            <div className="form-group row">
              <label for="inputEmail3" className="col-sm-2 col-form-label">
                Name
              </label>
              <div className="col-sm-10">
                <input
                  type="text"
                  name="name"
                  onChange={this.handleChange}
                  className="form-control"
                  value={this.state.name}
                  placeholder="Name of the Place"
                />
              </div>
            </div>
            <div className="form-group row">
              <label for="inputEmail3" className="col-sm-2 col-form-label">
                Description
              </label>
              <div className="col-sm-10">
                <textarea
                  type="text"
                  name="description"
                  onChange={this.handleChange}
                  className="form-control"
                  value={this.state.description}
                  placeholder="Small description"
                ></textarea>
              </div>
            </div>

            <div className="form-group row">
              <label for="inputPassword3" className="col-sm-2 col-form-label">
                Covid Status
              </label>
              <div className="col-sm-10">
                <select
                  name="COVID_status"
                  className="form-control"
                  onChange={this.handleChange}
                  value={this.state.COVID_status}
                >
                  <option value="success">Low Risk</option>
                  <option value="warning">Medium Risk</option>
                  <option value="danger">High Risk</option>
                </select>
              </div>
            </div>
            <div className="form-group row">
              <label for="inputPassword3" className="col-sm-2 col-form-label">
                Image
              </label>
              <div className="col-sm-10">
                <input
                  type="text"
                  name="image"
                  className="form-control"
                  onChange={this.handleChange}
                  value={this.state.image}
                  placeholder="Url of the Image"
                />
              </div>
            </div>

            <div className="form-group">
              <div className=" mx-auto">
                <button type="submit" className="btn btn-success col-3 m-2">
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
        <div className="">{placelist}</div>
      </div>
    );
  }
}

export default Add;
