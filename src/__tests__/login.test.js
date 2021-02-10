import React from "react";
import { shallow } from "enzyme";
import Login from "../components/user/Login";

describe("Login Component", () => {
  it("should render without throwing an error", () => {
    expect(
      shallow(<Login />)
        .find("form.login-form")
        .exists()
    ).toBe(true);
  });
});

it("renders a email input", () => {
  expect(shallow(<Login />).find("#inputEmail3").length).toEqual(1);
});

it("renders a password input", () => {
  expect(shallow(<Login />).find("#inputPassword3").length).toEqual(1);
});

describe("Email input", () => {
  it("respond to change event and change the state of the Login Component", () => {
    const wrapper = shallow(<Login />);
    wrapper.find("#inputEmail3").simulate("change", {
      target: { name: "email", value: "saman@gmail.com" },
    });
    expect(wrapper.state("email")).toEqual("saman@gmail.com");
  });
});
describe("Password input", () => {
  it("respond to change event and change the state of the Login Component", () => {
    const wrapper = shallow(<Login />);
    wrapper
      .find("#inputPassword3")
      .simulate("change", { target: { name: "password", value: "saman123" } });
    expect(wrapper.state("password")).toEqual("saman123");
  });
});
