import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react";
import BoxList from "./BoxList";

it("renders without crashing", function () {
  render(<BoxList />);
});

it("matches snapshot", function () {
  const { asFragment } = render(<BoxList />);
  expect(asFragment()).toMatchSnapshot();
});

it("Should add new item", async function () {
  const {
    getByPlaceholderText,
    queryByText,
    queryByLabelText,
    queryByDisplayValue,
  } = render(<BoxList />);

  //   checking to see if there is anything in the document right now, shouldn't be
  const button = queryByText("X");
  expect(button).not.toBeInTheDocument();

  //   queries all the inputs in the form, clicks submitButton
  const colorInput = getByPlaceholderText("color name");
  const widthInput = getByPlaceholderText("width");
  const heighthInput = getByPlaceholderText("height");
  const submitButton = queryByText("Add Box");

  fireEvent.change(colorInput, { target: { value: "blue" } });
  fireEvent.change(widthInput, { target: { value: "10" } });
  fireEvent.change(heighthInput, { target: { value: "10" } });
  fireEvent.click(submitButton);

  await waitFor(() => {
    const button = queryByText("X");
    expect(button).toBeInTheDocument();
  });
});
