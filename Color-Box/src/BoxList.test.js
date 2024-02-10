import React from "react";
import { render, fireEvent } from "@testing-library/react";
import BoxList from "./BoxList";


it("matches snapshot", function () {
  const { asFrag } = render(<BoxList />);
  expect(asFrag()).toMatchSnapShot();
});

it("Should add new item", function () {
  const { getByLabelTest, queryByDisplayValue } = render(<BoxList />);

  expect()
});
