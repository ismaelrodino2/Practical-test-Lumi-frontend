"use client";
import { PlusIcon } from "lucide-react";
import { useForm } from "react-hook-form";
import { FormDataType } from "@/types/types";
import { Button } from "@/components/ui/button";
import React, { useRef, useTransition } from "react";
import { toast } from "react-toastify";
import { uploadAction } from "../(actions)/create-bill-action";

export function Upload() {
  const [isPending, startTransition] = useTransition();

  const { register, reset, trigger } = useForm<FormDataType>();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    await trigger("pdfFile");
    toast.success("Arquivo selecionado com sucesso!");
  };

  function handleButtonClick() {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  }

  async function sendAction(formData: FormData) {
    startTransition(async () => {
      try {
        await uploadAction(formData);
        reset();
        toast.success("Fatura enviada");
      } catch (err) {
        console.error(err);
        toast.error("Erro ao enviar fatura");
      }
    });
  }

  return (
    <form
      action={async (formData: FormData) => sendAction(formData)}
      className="flex  gap-8"
    >
      <Button
        variant="outlined"
        size="small"
        type="button"
        title="Adicionar boleto"
        onClick={handleButtonClick}
      >
        <PlusIcon size={32} strokeWidth={1.2} className="text-gray-600" />
      </Button>
      <input
        {...register("pdfFile", { required: true })}
        ref={fileInputRef}
        id="pdfFile"
        type="file"
        accept="application/pdf"
        className="hidden"
        data-testid="pdfFile" // Adicione o atributo data-testid
        onChange={handleFileChange}
      />

      <Button
        variant="outlined"
        type="submit"
        title="Enviar boleto para o servidor"
        loading={isPending}
      >
        Enviar
      </Button>
    </form>
  );
}
