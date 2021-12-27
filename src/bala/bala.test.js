import React from "react";
import { shallow } from "enzyme";
import Bala from "./bala";

describe("Bala", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Bala />);
    expect(wrapper).toMatchSnapshot();
  });
});
