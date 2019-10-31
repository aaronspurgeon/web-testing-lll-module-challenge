// Test away

import React from "react";
import * as rtl from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { getByTestId } from "@testing-library/dom";
import Dashboard from "./Dashboard";

afterEach(rtl.cleanup);

test("Display and Controls component rendering", () => {
  const wrapper = rtl.render(<Dashboard />);
  //   const display = getByTestId("display");
  //   const controls = getByTestId("controls");

  //   expect(display).toBeCalled();
  //   expect(controls).toBeCalled();
  wrapper.debug();
  expect(wrapper.asFragment()).toMatchSnapshot();
});
