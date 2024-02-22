// bills-select.test.js
import { render, screen } from "@testing-library/react";
import { describe, expect, test, vi } from "vitest";
import { BillsSelect } from "./bills-select";

describe("BillsSelect component", () => {
  test("renders the component with options", async () => {
    const mockProps = {
      bills: [
        {
          id: 1,
          clientNumber: "123",
          date: "2022-01-01",
          dueDate: "2022-01-31",
          eletricityConsumption: 100,
          eletricityCost: 50,
          sceeeeConsumption: 80,
          sceeeeCost: 40,
          gdiEnergyConsumption: 30,
          gdiEnergyCost: 20,
          publicContribution: 10,
          fileUrl: "",
          fileKey: "",
        },
        {
          id: 2,
          clientNumber: "1234",
          date: "2022-04-02",
          dueDate: "2022-05-23",
          eletricityConsumption: 1400,
          eletricityCost: 540,
          sceeeeConsumption: 840,
          sceeeeCost: 440,
          gdiEnergyConsumption: 340,
          gdiEnergyCost: 240,
          publicContribution: 104,
          fileUrl: "",
          fileKey: "",
        },
      ],
      setSelectedMonth: vi.fn(),
      selectedMonth: "",
    };

    render(<BillsSelect {...mockProps} />);

    const selectElement = screen.getByTestId("selectMonth");

    expect(selectElement).toBeDefined();

    const options = screen.getAllByRole("option");
    expect(options).toHaveLength(3); // Including the disabled option

    const disabledOption = screen.getByText("Escolha o Mês");
    expect(disabledOption).toBeDefined();
  });
});
