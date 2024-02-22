import { render, fireEvent, screen, cleanup } from "@testing-library/react";
import { beforeEach, describe, expect, test } from "vitest";
import { Upload } from "./upload";

describe("Upload component", () => {
  beforeEach(() => {
    cleanup();
  });

  test("renders the component", async () => {
    render(<Upload />);
    const addButton = screen.getByTitle("Adicionar boleto");
    const sendButton = screen.getByTitle("Enviar boleto para o servidor");

    expect(addButton).toBeDefined();
    expect(sendButton).toBeDefined();
  });

  test("triggers file input click on button click", async () => {
    render(<Upload />);
    const addButton = screen.getByTitle("Adicionar boleto");
    const fileInput = screen.getByTestId("pdfFile");

    fireEvent.click(addButton);

    expect(fileInput).toHaveProperty("type", "file");
  });
});
