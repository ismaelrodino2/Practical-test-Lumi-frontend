import { Bill, Inputs } from "@/app/types/types";
import { Button } from "@/components/button";
import Input from "@/components/input";
import { SubmitHandler } from "react-hook-form";
import { Upload } from "./upload";

type Props = {
  data: Bill[];
  onClientNumberFilter: (clientNumber: string) => void;
  onReset: () => void;
};

export function DashboardFilters(props: Props) {
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    props.onClientNumberFilter(data.clientNumber);
  };

  const handleResetClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    props.onReset();
  };

  return (
    <div className="flex  justify-center ">
      <div className="flex flex-col text-center">
        <h1 className="text-black text-lg font-medium py-5">Gráficos de uso</h1>
        <div className="flex gap-x-8 gap-y-2 flex-wrap">
          <Input onSubmit={onSubmit} />
          <Upload />
          <Button
            variant="filled"
            onClick={handleResetClick}
            size="medium"
            title="Resetar n° de usuário"
          >
            Resetar
          </Button>
        </div>
      </div>
    </div>
  );
}
