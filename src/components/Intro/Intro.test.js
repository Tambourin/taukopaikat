import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, cleanup } from "@testing-library/react";
import Intro from "./Intro";

afterEach(cleanup);

test("Renders text", () => {
  const rendered = render(<Intro />);
  expect(rendered.container).toHaveTextContent("Suomen parhaat");
});

