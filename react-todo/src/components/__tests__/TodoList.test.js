import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import TodoList from "../TodoList";


describe("TodoList Component", () => {
  test("renders initial todos correctly", () => {
    render(<TodoList/>);
    expect(screen.getByText("Learn React")).toBeInTheDocument();
    expect(screen.getByText("Build a Todo App")).toBeInTheDocument();
  });

  test("adds a new todo", () => {
    render(<TodoList />);

    // get input and button
    const input = screen.getByPlaceholderText(/enter a todo/i);
    const addButton = screen.getByRole("button", { name: /add/i });

    // simulate typing and clicking
    fireEvent.change(input, { target: { value: "Write tests" } });
    fireEvent.click(addButton);

    // assert new todo is in the list
    expect(screen.getByText("Write tests")).toBeInTheDocument();
  });
});
