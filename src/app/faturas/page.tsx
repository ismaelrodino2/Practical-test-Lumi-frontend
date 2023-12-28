"use client";
import { Button } from "@/components/button";
import { useState } from "react";
import { BillsFilters } from "./(components)/bills-filters";
import useClientBills from "./(hooks)/bills";

export default function Faturas() {
  const { bills, downloadPdf, onSubmit } = useClientBills();
  const [selectedMonth, setSelectedMonth] = useState<string>("");

  return (
    <div className=" container mx-auto px-4">
      <BillsFilters
        onSubmitBills={onSubmit}
        bills={bills}
        selectedMonth={selectedMonth}
        setSelectedMonth={setSelectedMonth}
      />

      <div className="pb-8">
        {selectedMonth && (
          <div>
            <ul>
              {bills
                .filter((bill) => bill.date === selectedMonth)
                .map((bill) => (
                  <div
                    key={bill.id}
                    className="flex flex-col gap-7 items-center py-2"
                  >
                    <iframe
                      src={bill.fileUrl}
                      title={`Conta - ${selectedMonth}`}
                      width="100%"
                      height="400px"
                    />
                    <Button
                      variant="filledDark"
                      size="large"
                      type="button"
                      onClick={() => downloadPdf(bill)}
                    >
                      Baixar
                    </Button>
                  </div>
                ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
