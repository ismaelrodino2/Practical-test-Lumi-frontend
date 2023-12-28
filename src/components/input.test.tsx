import {
  render,
  fireEvent,
  screen,
  cleanup,
  waitFor,
} from "@testing-library/react";
import { beforeEach, describe, expect } from "vitest";
import Input from "./input";

type Value = { clientNumber: string };

describe("Input component", async () => {
  beforeEach(() => {
    cleanup();
  });

  describe("Input component", async (test) => {
    test("renders input and button", async () => {
      render(<Input onSubmit={async () => {}} />);
      const inputElement = screen.getByPlaceholderText("N° de cliente");
      const buttonElement = screen.getByTitle("Filtrar pelo n° de cliente");

      expect(inputElement).toBeDefined();
      expect(buttonElement).toBeDefined();
    });

    test("calls onSubmitHandler when form is submitted", async () => {
      let value: Value;
      function onSubmit(data: { clientNumber: string }) {
        value = data;
      }
      render(<Input onSubmit={onSubmit} />);
      const inputElement = screen.getByPlaceholderText(
        "N° de cliente"
      ) as HTMLInputElement;

      const buttonElement = screen.getByTitle("Filtrar pelo n° de cliente");

      fireEvent.change(inputElement, { target: { value: "123" } });

      expect(inputElement.value).toBe("123");

      fireEvent.click(buttonElement);

      await waitFor(() => {
        const expectedData = { clientNumber: "123" };
        expect(value).toEqual(expectedData);
      });
    });
  });
});
