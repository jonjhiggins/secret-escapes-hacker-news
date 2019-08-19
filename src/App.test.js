import React from "react";
import ReactDOM from "react-dom";
import { render } from "@testing-library/react";
import App from "./App";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

describe("renders component", () => {
  let container;
  beforeEach(() => {
    container = render(<App />).container;
  });

  it("Header", () => {
    expect(container.getElementsByClassName("header")[0]).toBeTruthy();
  });

  it("Stories", () => {
    expect(container.getElementsByClassName("stories")[0]).toBeTruthy();
  });
});
