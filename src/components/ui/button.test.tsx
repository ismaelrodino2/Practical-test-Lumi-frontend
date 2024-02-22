import { render, screen, cleanup } from "@testing-library/react";
import { beforeEach, describe, expect, test } from "vitest";
import { Button } from "./button";

describe("Button component", () => {
  beforeEach(() => {
    cleanup();
  });

  test("renders button with children", () => {
    render(<Button>Test Button</Button>);
    expect(screen.getByText("Test Button")).toBeDefined();
  });

  test("applies size and variant classes", () => {
    const { rerender } = render(
      <Button size="small" variant="filled">
        Small Filled
      </Button>
    );
    expect(screen.getByText("Small Filled").className).toMatch(/p-1/);
    expect(screen.getByText("Small Filled").className).toMatch(/bg-gray-100/);

    rerender(
      <Button size="large" variant="outlined">
        Large Outlined
      </Button>
    );
    expect(screen.getByText("Large Outlined").className).toMatch(/px-6 py-1/);
    expect(screen.getByText("Large Outlined").className).toMatch(
      /border-gray-600/
    );
  });
  test("shows loading state", () => {
    render(<Button loading>Loading Button</Button>);
    const svgElement = document.querySelector("svg");
    expect(svgElement).not.toBeNull();
  });
});
