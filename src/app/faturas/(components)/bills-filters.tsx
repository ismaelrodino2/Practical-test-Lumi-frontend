"use client";

import { Bill, Inputs } from "@/app/types/types";
import Input from "@/components/input";
import { SubmitHandler } from "react-hook-form";
import { BillsSelect } from "./bills-select";

type Props = {
  onSubmitBills: (clientNumber: string) => void;
  bills: Bill[];
  setSelectedMonth: (value: string) => void;
  selectedMonth: string;
};

export function BillsFilters({ onSubmitBills, ...props }: Props) {
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    onSubmitBills(data.clientNumber);
  };

  return (
    <div className="flex gap-8 justify-center py-8">
      <Input onSubmit={onSubmit} />
      {props.bills.length > 0 ? <BillsSelect {...props} /> : null}
    </div>
  );
}
