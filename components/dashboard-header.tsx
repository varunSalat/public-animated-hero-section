"use client";
import { motion, useReducedMotion } from "framer-motion";

export default function DashboardHeader() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="relative  mx-auto flex min-h-[600px] max-w-5xl flex-col items-center justify-center px-6  pt-24 text-center ">
      <motion.div
        initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="flex flex-col items-center"
      >
        <span className="inline-flex items-center gap-2 rounded-full border border-black/8 bg-white/80 px-4 py-2 text-sm font-medium text-[#242426] shadow-[0_8px_30px_rgba(36,36,56,0.05)] backdrop-blur">
          <span className="grid size-5 place-items-center rounded-full bg-[#ebedfa]">
            <span className="size-1.5 rounded-full bg-[#d9ff5c]" />
          </span>
          AI-Powered Finance
        </span>

        <h1 className="mt-8 max-w-4xl text-balance text-[clamp(3.25rem,7vw,6.75rem)] font-medium leading-[0.94] tracking-[-0.065em]">
          Know your cash. Plan with AI.
        </h1>

        <motion.p
          initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.7,
            delay: shouldReduceMotion ? 0 : 0.08,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mt-7 max-w-2xl text-balance text-lg leading-8 text-[#5f5e68] sm:text-xl"
        >
          Stay on top of every transaction, invoice, and forecast in one clean
          view.
        </motion.p>

        <motion.a
          initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.7,
            delay: shouldReduceMotion ? 0 : 0.16,
            ease: [0.22, 1, 0.36, 1],
          }}
          href="#dashboard-scene"
          className="group mt-9 inline-flex items-center gap-4 rounded-[1.25rem] bg-[#0f0f0f] py-1.5 pl-6 pr-1.5 text-sm font-medium text-white shadow-[0_18px_45px_rgba(15,15,15,0.16)] transition-transform duration-300 hover:-translate-y-0.5"
        >
          Explore dashboard
          <span className="grid size-11 place-items-center rounded-2xl bg-[#d9ff5c] text-[#0f0f0f] transition-transform duration-300 group-hover:rotate-6">
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              className="size-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.75"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M7 17 17 7" />
              <path d="M8 7h9v9" />
            </svg>
          </span>
        </motion.a>

        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.7,
            delay: shouldReduceMotion ? 0 : 0.24,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mt-10 flex items-center gap-4"
        >
          <div aria-hidden="true" className="flex -space-x-2.5">
            <span className="size-9 rounded-full border-2 border-[#fbfaf7] bg-[radial-gradient(circle_at_52%_34%,#f4c6b7_0_19%,transparent_20%),linear-gradient(145deg,#6d4f78,#edb39f)]" />
            <span className="size-9 rounded-full border-2 border-[#fbfaf7] bg-[radial-gradient(circle_at_50%_34%,#d7a37c_0_18%,transparent_19%),linear-gradient(145deg,#273445,#8eafc2)]" />
            <span className="size-9 rounded-full border-2 border-[#fbfaf7] bg-[radial-gradient(circle_at_50%_34%,#8f5e43_0_18%,transparent_19%),linear-gradient(145deg,#e4d2b4,#789277)]" />
            <span className="size-9 rounded-full border-2 border-[#fbfaf7] bg-[radial-gradient(circle_at_50%_34%,#edc7a8_0_18%,transparent_19%),linear-gradient(145deg,#a1515b,#f3c6bb)]" />
            <span className="grid size-9 place-items-center rounded-full border-2 border-[#fbfaf7] bg-[#ebedfa] text-[10px] font-semibold text-[#5d5c6c]">
              2k+
            </span>
          </div>
          <p className="text-left text-sm leading-5 text-[#777681]">
            Trusted by
            <br />
            growing businesses
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
}
