import { FaturasScreen } from "./page.client";

async function getData() {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/bill/all`,
      {
        next: { revalidate: 60 * 5, tags: ["bills"] },
      }
    );
    const json = await res.json();
    return json;
  } catch (err) {
    console.error(err);
  }
}

export default async function Faturas() {
  const data = await getData();

  return <FaturasScreen data={data} />;
}
