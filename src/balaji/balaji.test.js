import React from "react";
import { shallow } from "enzyme";
import Balaji from "./balaji";

describe("Balaji", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Balaji />);
    expect(wrapper).toMatchSnapshot();
  });
});
