"use server";
import { revalidateTag } from "next/cache";

export async function uploadAction(data: FormData) {
  const formDataToSubmit = new FormData();

  const pdfFile = data.get("pdfFile");

  if (pdfFile !== null) {
    formDataToSubmit.append("pdfFile", pdfFile);
  }

  await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/bill`, {
    method: "POST",
    body: formDataToSubmit,
  });

  revalidateTag("bills");
}
