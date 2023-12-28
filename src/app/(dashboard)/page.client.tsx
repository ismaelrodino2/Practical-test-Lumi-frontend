"use client";
import { useEffect } from "react";
import { Bill } from "../types/types";
import { CostChart, EnergyChart } from "./(components)/(charts)";
import { DashboardFilters } from "./(components)/dashboard-filters";
import useBillData from "./(hooks)/api-data";

type Props = {
  data: Bill[];
};

export function FaturasScreen(props: Props) {
  const { apiData, onNewData, onClientNumberFilter, onReset } = useBillData(
    props.data
  );

  useEffect(() => {
    onNewData(props.data);
  }, [props.data]);

  return (
    <div className="flex gap-6 flex-col container mx-auto px-4">
      <DashboardFilters
        onClientNumberFilter={onClientNumberFilter}
        onReset={onReset}
        data={apiData}
      />
      <div className="flex md:flex-row flex-col gap-8">
        <div className=" md:w-1/2 w-full h-auto">
          <EnergyChart data={apiData} />
        </div>
        <div className=" md:w-1/2 w-full h-auto">
          <CostChart data={apiData} />
        </div>
      </div>
    </div>
  );
}
