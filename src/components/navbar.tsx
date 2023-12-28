"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavBar() {
  const pathName = usePathname();

  return (
    <div className="flex border-b-[0.5px] border-gray-300 justify-center">
      <ul className="text-lg font-medium text-gray-900 flex py-5 md:gap-32 gap-20">
        <li
          className={`py-2 px-4 ${
            pathName === "/" ? "border-b-2 border-gray-800" : ""
          }`}
        >
          <Link href="/">Dashboard</Link>
        </li>
        <li
          className={`py-2 px-4 ${
            pathName === "/faturas" ? "border-b-2 border-gray-800" : ""
          }`}
        >
          <Link href="/faturas">Faturas</Link>
        </li>
      </ul>
    </div>
  );
}
