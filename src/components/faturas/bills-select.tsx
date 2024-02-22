import { Bill } from "@/types/types";
type Props = {
  bills: Bill[];
  setSelectedMonth: (value: string) => void;
  selectedMonth: string;
};

export function BillsSelect(props: Props) {
  function getMonthName(monthNumber: number) {
    const date = new Date();
    date.setMonth(monthNumber - 1);

    return date.toLocaleString("pt-BR", {
      month: "long",
    });
  }

  function getMonthName2(date: string) {
    const extractedMonth = date.match(/^\d+/);
    if (extractedMonth) {
      const monthName = getMonthName(Number(extractedMonth[0]));
      const month = monthName.charAt(0).toUpperCase() + monthName.slice(1);
      return month;
    }
  }

  const formattedMonths: string[] = props.bills.map((conta) => conta.date);

  return (
    <div>
      <select
        id="selectMonth"
        data-testid="selectMonth"
        className="text-gray-900 bg-gray-100 py-[9px] px-4 rounded-md outline-none border border-gray-300 hover:border-gray-500 focus:border-gray-500 transition-all duration-300"
        value={props.selectedMonth}
        onChange={(e) => props.setSelectedMonth(e.target.value)}
      >
        <option value="" disabled>
          Escolha o Mês
        </option>
        {Array.from(new Set(formattedMonths))
          .sort()
          .map((month, index) => (
            <option key={index} value={month} className="text-gray-900">
              {getMonthName2(month)}
            </option>
          ))}
      </select>
    </div>
  );
}
