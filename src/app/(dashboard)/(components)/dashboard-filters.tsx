"use client";

import { Bill, Inputs } from "@/types/types";
import { Button } from "@/components/ui/button";
import Input from "@/components/ui/input";
import { SubmitHandler } from "react-hook-form";
import { Upload } from "./upload";
import { TrashIcon } from "lucide-react";
import { useTransition } from "react";
import { toast } from "react-toastify";
import { deleteAction } from "../(actions)/delete-bill-action";

type Props = {
  data: Bill[];
  onClientNumberFilter: (clientNumber: string) => void;
  onReset: () => void;
};

export function DashboardFilters(props: Props) {
  const [isPending, startTransition] = useTransition();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    props.onClientNumberFilter(data.clientNumber);
  };

  const handleResetClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    props.onReset();
  };

  async function handleDelete() {
    startTransition(async () => {
      try {
        await deleteAction();
        toast.success("Faturas deletadas");
      } catch (err) {
        console.error(err);
        toast.error("Erro ao deletar faturas");
      }
    });
  }

  return (
    <div className="flex  justify-center ">
      <div className="flex flex-col text-center">
        <h1 className="text-black text-lg font-medium py-5">Gráficos de uso</h1>
        <div className="flex gap-x-8 gap-y-4 flex-wrap justify-center">
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
          <form action={handleDelete}>
            <Button
              variant="filled"
              loading={isPending}
              size="medium"
              title="Deletar todos boletos"
            >
              <TrashIcon className="text-gray-600" />
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
