import React from "react";
import "@testing-library/jest-dom";
import {
  render,
  screen,
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import NavBar from "../NavBar";

const userTest = userEvent.setup();

test("display and close sidebar", async () => {
  render(<NavBar />);

  const openSidebar = screen.getByAltText(
    "logo-image-open"
  );

  await userTest.click(openSidebar);

  expect(
    screen.getByText(/our company/i)
  ).toBeInTheDocument();
  expect(
    screen.getByText(/locations/i)
  ).toBeInTheDocument();
  expect(
    screen.getByText(/contact/i)
  ).toBeInTheDocument();

  ////////

  const closeSidebar = screen.getByAltText(
    "logo-image-close"
  );

  await userTest.click(closeSidebar);

  expect(
    screen.getByAltText("logo-image-open")
  ).toBeInTheDocument();
});
