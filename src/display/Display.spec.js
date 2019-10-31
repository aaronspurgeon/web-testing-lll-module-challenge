// Test away!
import React from "react";
import * as rtl from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Display from "./Display";

afterEach(rtl.cleanup);

// test('<Display /> snapshot', async () => {
//     const wrapper = rtl.render(<Display />)
//     await wrapper.findAllBy
// })
test("<Display /> snapshot", () => {
  const wrapper = rtl.render(<Display />);

  expect(wrapper.asFragment()).toMatchSnapshot();
});
