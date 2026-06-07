"use client";

import Image from "next/image";
import fileIcon from "../public/file.svg";
import globeIcon from "../public/globe.svg";

export default function Dashboard() {
  return (
    <div className="rounded-4xl border border-slate-200/80 bg-white/95 p-6 shadow-[0_20px_60px_rgba(15,23,42,0.06)] w-full">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h2 className="text-4xl font-semibold text-slate-900">
            Projected balance
          </h2>
          <p className="mt-2 text-sm text-slate-500">
            No negative cash days expected
          </p>
        </div>

        <div className="flex items-center gap-4">
          <div className="rounded-3xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white">
            Next 30 days
          </div>
          <div className="rounded-full bg-white p-2 shadow">
            <Image src={globeIcon} alt="globe" width={20} height={20} />
          </div>
        </div>
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-3">
        <div className="col-span-2 rounded-3xl bg-slate-50 p-6">
          <div className="text-sm text-slate-500">Income</div>
          <div className="mt-4 text-3xl font-semibold text-slate-900">
            $27,500
          </div>
          <div className="mt-6 h-44 rounded-lg bg-white border border-slate-200" />
        </div>

        <div className="space-y-4">
          <div className="rounded-3xl border border-slate-200 bg-white p-4">
            <div className="text-sm text-slate-500">Liquidity</div>
            <div className="mt-3 text-2xl font-semibold text-slate-900">
              82%
            </div>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white p-4">
            <div className="text-sm text-slate-500">Reduction</div>
            <div className="mt-3 text-2xl font-semibold text-slate-900">
              96%
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 grid gap-6 sm:grid-cols-2">
        <div className="rounded-3xl border border-slate-200 bg-slate-50 p-4">
          <div className="flex items-center justify-between">
            <div className="text-sm text-slate-500">Income Sources</div>
            <div className="rounded-full bg-slate-900 px-3 py-1 text-xs font-semibold text-white">
              Q4 2025
            </div>
          </div>
          <div className="mt-4 space-y-3">
            <div className="h-2 rounded-full bg-cyan-300" />
            <div className="h-2 rounded-full bg-sky-300" />
            <div className="h-2 rounded-full bg-violet-300" />
          </div>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-slate-50 p-4">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-full bg-white p-2 shadow">
              <Image src={fileIcon} alt="file" width={24} height={24} />
            </div>
            <div>
              <div className="text-sm text-slate-500">Yearly progress</div>
              <div className="mt-2 h-6 w-56 rounded-full bg-slate-100" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
