import React from "react";
import {
  render,
  fireEvent,
  waitFor,
  getByLabelText,
} from "@testing-library/react";
import ToDoList from "./ToDoList";

test("renders without crashing", () => {
  render(<ToDoList />);
});

it("matches snapshot", function () {
  const { asFragment } = render(<ToDoList />);
  expect(asFragment()).toMatchSnapshot();
});

it("Should add new task", async function () {
  const {
    getByPlaceholderText,
    queryByText,
    queryByLabelText,
    queryByDisplayValue,
  } = render(<ToDoList />);

  // checking to see if there are any tasks on the page right now
  const button = queryByText("Task Done!");
  expect(button).not.toBeInTheDocument();

  // queries the task InputDeviceInfo, clicks submitButton
  const taskInput = getByPlaceholderText("New Task");
  const submitButton = queryByText("Add Task to List");

  fireEvent.change(taskInput, { target: { value: "Cut Luna's Nails" } });
  fireEvent.click(submitButton);

  //   checks to see if a task is added to the page
  await waitFor(() => {
    const button = queryByText("Task Done!");
    expect(button).toBeInTheDocument();
  });

  // checks to see if delete task button works
  await waitFor(() => {
    const button = queryByText("Task Done!");
    fireEvent.click(button);
    expect(queryByText("Cut Luna's Nails")).not.toBeInTheDocument();
  });
});
