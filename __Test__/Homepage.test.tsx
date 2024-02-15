import MyTextField from "@/app/components/MyTextField";
import Home from "@/app/page";
import { render, screen } from "@testing-library/react";

describe("Home Page -Rendering", () => {
  it("should have Home Page text", () => {
    render(<Home />);
    expect(screen.getByText("Home Page")).toBeInTheDocument();
  });

  it("should have the button with text Click Me", () => {
    render(<Home />);
    expect(
      screen.getByRole("button", { name: "Click Me" })
    ).toBeInTheDocument();
  });

  it("should have a text input", () => {
    render(<Home />);
    expect(screen.getByLabelText(/input your name/)).toBeInTheDocument();
  });


  it("Should find the MyTextField input", () => {
    render(<MyTextField />);
    const inputElement = screen.getByTestId("hello");
    expect(inputElement).toBeInTheDocument();
  });

});
