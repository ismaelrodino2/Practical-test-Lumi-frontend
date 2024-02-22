import { Inputs } from  "@/types/types";
import { SendHorizontalIcon } from "lucide-react";
import { SubmitHandler, useForm } from "react-hook-form";

type Props = {
  onSubmit: SubmitHandler<Inputs>;
};

type Input = {
  clientNumber: string;
};

export default function Input(props: Props) {
  const { register, handleSubmit, reset } = useForm<Input>();

  async function onSubmitHandler(data: Inputs) {
    await props.onSubmit(data);
    reset();
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmitHandler)}
      className="border border-gray-600 rounded-md w-fit"
      aria-label="form"
    >
      <div className="relative flex items-stretch w-full ">
        <input
          {...register("clientNumber")}
          placeholder="N° de cliente"
          name="clientNumber"
          className=" w-48 p-2 border-none focus:outline-none focus:ring-2 focus:ring-green-500 rounded-md"
        />

        <button
          type="submit"
          title="Filtrar pelo n° de cliente"
          className="absolute right-0 top-0 bg-green-500 p-2 rounded-r-md flex items-center justify-center"
        >
          <SendHorizontalIcon
            strokeWidth={1.5}
            stroke="#454444"
            fill="#ECE9E9"
            size={28}
          />
        </button>
      </div>
    </form>
  );
}
