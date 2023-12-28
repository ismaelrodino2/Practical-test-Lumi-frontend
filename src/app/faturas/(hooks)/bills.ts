import React, { useState } from 'react';
import { toast } from "react-toastify";
import { Bill } from "../../types/types";

function useClientBills() {
  const [bills, setBills] = useState<Bill[]>([]);

  async function downloadPdf(file: Bill) {
    try {
      const response = await fetch(file.fileUrl);
      const blob = await response.blob();

      const link = document.createElement("a");
      link.href = window.URL.createObjectURL(blob);
      link.download = file.fileKey || "download.pdf";

      link.click();

      window.URL.revokeObjectURL(link.href);
    } catch (error) {
      console.error("Erro ao baixar o PDF:", error);
    }
  }

  async function onSubmit(clientNumber: string) {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/bill/group?clientNumber=${clientNumber}`
      );
      const json = await response.json();

      const foundBills = json as Bill[];

      if (!foundBills.length) {
        toast.error("Nenhuma fatura encontrada");
        return;
      }

      setBills(json);
      toast.success("Fatura encontrada!");
    } catch (error) {
      console.error("Erro ao enviar arquivo:", error);
      toast.error("Erro ao tentar encontrar fatura");
    }
  }

  return { bills, downloadPdf, onSubmit };
}

export default useClientBills;
