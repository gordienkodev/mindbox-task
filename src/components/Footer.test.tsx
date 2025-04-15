import { render, screen, fireEvent } from "@testing-library/react";
import Footer from "./Footer";
import "@testing-library/jest-dom";
import { Filter } from "./types";

describe("Footer", () => {
  const mockSetFilter = jest.fn();
  const mockClearCompleted = jest.fn();

  beforeEach(() => {
    render(
      <Footer
        leftTasksCount={3}
        filter={Filter.All}
        setFilter={mockSetFilter}
        clearCompleted={mockClearCompleted}
      />
    );
  });

  test("displays the correct count of left tasks", () => {
    expect(screen.getByText("3 items left")).toBeInTheDocument();
  });

  test("handles filter button clicks", () => {
    fireEvent.click(screen.getByText("Active"));
    expect(mockSetFilter).toHaveBeenCalledWith("active");

    fireEvent.click(screen.getByText("Completed"));
    expect(mockSetFilter).toHaveBeenCalledWith("completed");
  });

  test("handles clear completed button click", () => {
    fireEvent.click(screen.getByText("Clear completed"));
    expect(mockClearCompleted).toHaveBeenCalled();
  });
});
