// Test away!
import React from "react";
import * as rtl from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Controls from "./Controls";

afterEach(rtl.cleanup);

test("<Controls /> snapshot", () => {
  const wrapper = rtl.render(<Controls />);

  expect(wrapper.asFragment()).toMatchSnapshot();
});

test("user clicking the button", async () => {
  const wrapper = rtl.render(<Controls />);
  await wrapper.findAllByText(/gate/i);

  const lock = wrapper.getByText(/lock/i);

  rtl.act(() => {
    rtl.fireEvent.click(lock);
  });
});
