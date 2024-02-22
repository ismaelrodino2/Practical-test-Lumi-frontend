"use server";
import { revalidateTag } from "next/cache";

export async function deleteAction() {

  await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/bill/all`, {
    method: "DELETE",
  });

  revalidateTag("bills");
}
