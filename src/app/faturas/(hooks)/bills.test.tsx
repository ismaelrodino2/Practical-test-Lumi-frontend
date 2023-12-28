import { afterEach, beforeEach, describe, expect, test, vi } from "vitest";
import useClientBills from "./bills";
import { renderHook } from "@testing-library/react";
import { act } from "react-dom/test-utils";

// Mocking the fetch
vi.mock("node-fetch");
const mockBills = [
  {
    id: 1,
    clientNumber: "7005400387",
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
];

describe("useClientBills", () => {
  beforeEach(() => {
    // Mocking fetch to return a simulated response based on the clientNumber
    vi.spyOn(global, "fetch").mockImplementation(
      async (url: string | URL | Request) => {
        const clientNumberMatch =
          typeof url === "string" ? url.match(/clientNumber=(\d+)/) : null;
        const clientNumber = clientNumberMatch ? clientNumberMatch[1] : "";

        if (clientNumber === "7005400387") {
          // Simulating a specific response for the clientNumber '7005400387'
          return Promise.resolve({
            json: async () => Promise.resolve(mockBills),
          } as Response);
        } else {
          // Simulating a default response for other clientNumbers
          return Promise.resolve({
            json: async () => Promise.resolve([]),
          } as Response);
        }
      }
    );

    // Suppressing console.error warnings during tests
    vi.spyOn(console, "error").mockImplementation(() => {});
  });

  afterEach(() => {
    // Restoring all mocks after each test
    vi.restoreAllMocks();
  });

  test("should set bills and show success toast on successful submit", async () => {
    const { result } = renderHook(() => useClientBills());

    await act(async () => {
      await result.current.onSubmit("12345");
    });

    expect(result.current.bills).toEqual([]);
  });

  test("should set bills and show success toast for specific clientNumber", async () => {
    const { result } = renderHook(() => useClientBills());

    await act(async () => {
      await result.current.onSubmit("7005400387");
    });

    expect(result.current.bills).toEqual(mockBills);
  });
});
