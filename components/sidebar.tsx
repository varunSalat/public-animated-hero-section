"use client";

import Image from "next/image";
import windowIcon from "../public/window.svg";

export default function Sidebar() {
  return (
    <aside className="flex w-20 flex-col items-center gap-6 p-4">
      <div className="rounded-full bg-white/90 p-2 shadow">
        <Image src={windowIcon} alt="app" width={28} height={28} />
      </div>

      <nav className="flex flex-1 flex-col items-center justify-center gap-6">
        <div className="h-10 w-10 rounded-full bg-lime-300/80" />
        <div className="h-8 w-1 bg-slate-200/60 rounded" />
        <div className="h-8 w-1 bg-slate-200/60 rounded" />
      </nav>

      <div className="mt-auto">
        <div className="h-10 w-10 rounded-full bg-pink-200/80" />
      </div>
    </aside>
  );
}
