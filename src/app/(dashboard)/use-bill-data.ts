import { useState } from "react";
import { Bill } from "@/types/types";

export function useBillData(initialValue: Bill[]) {
  const [apiData, setApiData] = useState(initialValue);

  function onNewData(data: Bill[]) {
    setApiData(data);
  }

  function onClientNumberFilter(clientNumber: string) {
    setApiData((prev) => prev.filter((e) => e.clientNumber == clientNumber));
  }

  function onReset() {
    setApiData(initialValue);
  }

  return { apiData, onNewData, onClientNumberFilter, onReset };
}

