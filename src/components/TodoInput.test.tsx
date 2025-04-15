import { render, screen, fireEvent } from "@testing-library/react";
import TodoInput from "./TodoInput";
import "@testing-library/jest-dom";

describe("TodoInput", () => {
  test("adds a new task", () => {
    render(<TodoInput />);

    const input = screen.getByPlaceholderText("What needs to be done?");
    fireEvent.change(input, { target: { value: "New task" } });
    fireEvent.submit(input.closest("form")!);

    expect(screen.getByText("New task")).toBeInTheDocument();
  });

  test("toggles task completion", () => {
    render(<TodoInput />);

    const taskItem = screen.getByText("Тестовое задание");
    expect(taskItem).not.toHaveStyle("text-decoration: line-through");

    fireEvent.click(taskItem);
    expect(taskItem).toHaveStyle("text-decoration: line-through");

    fireEvent.click(taskItem);
    expect(taskItem).not.toHaveStyle("text-decoration: line-through");
  });

  test("clears completed tasks", () => {
    render(<TodoInput />);

    const taskItem = screen.getByText("Тестовое задание");
    fireEvent.click(taskItem);

    const clearButton = screen.getByText("Clear completed");
    fireEvent.click(clearButton);

    expect(screen.queryByText("Тестовое задание")).not.toBeInTheDocument();
  });

  test("does not add an empty task", () => {
    render(<TodoInput />);
    const input = screen.getByPlaceholderText("What needs to be done?");
    fireEvent.change(input, { target: { value: " " } });
    fireEvent.submit(input.closest("form")!);
    expect(screen.queryByText(" ")).not.toBeInTheDocument();
  });
  
});
