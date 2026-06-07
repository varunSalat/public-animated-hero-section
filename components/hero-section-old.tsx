"use client";

import Image from "next/image";
import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";

export default function HeroSection() {
  const dashboardSceneRef = useRef<HTMLDivElement | null>(null);
  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: dashboardSceneRef,
    offset: ["start start", "end end"],
  });

  const progress = useSpring(scrollYProgress, {
    stiffness: 110,
    damping: 28,
    mass: 0.22,
  });

  const dashboardY = useTransform(progress, [0, 0.78], [96, 0]);
  const dashboardScale = useTransform(progress, [0, 0.78], [0.92, 1]);
  const dashboardRotateX = useTransform(progress, [0, 0.78], [10, 0]);
  const dashboardShadow = useTransform(
    progress,
    [0, 0.78],
    [
      "0 32px 80px rgba(36, 36, 56, 0.09)",
      "0 20px 55px rgba(36, 36, 56, 0.13)",
    ],
  );

  const cardX = useTransform(progress, [0.08, 0.82], [36, 0]);
  const cardY = useTransform(progress, [0.08, 0.82], [-24, 0]);
  const cardScale = useTransform(progress, [0.08, 0.82], [1.1, 1]);
  const cardRotate = useTransform(progress, [0.08, 0.82], [3, 0]);
  const cardShadow = useTransform(
    progress,
    [0.08, 0.82],
    ["0 26px 55px rgba(31, 34, 48, 0.24)", "0 8px 22px rgba(31, 34, 48, 0.12)"],
  );

  const settledDashboardStyle = shouldReduceMotion
    ? {
        y: 0,
        scale: 1,
        rotateX: 0,
        boxShadow: "0 20px 55px rgba(36, 36, 56, 0.13)",
      }
    : {
        y: dashboardY,
        scale: dashboardScale,
        rotateX: dashboardRotateX,
        boxShadow: dashboardShadow,
      };

  const settledCardStyle = shouldReduceMotion
    ? {
        x: 0,
        y: 0,
        scale: 1,
        rotate: 0,
        boxShadow: "0 8px 22px rgba(31, 34, 48, 0.12)",
      }
    : {
        x: cardX,
        y: cardY,
        scale: cardScale,
        rotate: cardRotate,
        boxShadow: cardShadow,
      };

  return (
    <section className="relative overflow-clip bg-[#fbfaf7] text-[#0f0f0f]">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[70rem] bg-[radial-gradient(circle_at_50%_18%,rgba(235,237,250,0.95),rgba(251,250,247,0)_57%)]" />

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

      <div
        id="dashboard-scene"
        ref={dashboardSceneRef}
        className="relative h-[160svh] scroll-mt-0 md:h-[190svh]"
      >
        <div className="sticky top-0 flex h-svh items-center justify-center overflow-hidden px-4 py-8 sm:px-6 sm:py-10">
          <div className="dashboard-perspective relative">
            <motion.div
              style={settledDashboardStyle}
              className="dashboard-frame relative aspect-4/3 overflow-visible rounded-[clamp(0.4rem,1.3vw,1.5rem)] ring-[clamp(0px,0.55vw,12px)] ring-white/35"
            >
              <div className="absolute inset-0 overflow-hidden rounded-[inherit]">
                <Image
                  src="/dashboard-img/layout.png"
                  alt="Projected balance finance dashboard"
                  fill
                  priority
                  sizes="(max-width: 640px) calc(100vw - 2rem), (max-width: 1200px) calc(100vw - 3rem), 1200px"
                  className="object-cover"
                />
              </div>

              <div
                aria-hidden="true"
                className="dashboard-card-target absolute rounded-[clamp(0.25rem,0.8vw,0.75rem)] border border-dashed border-[#9391b8]/65"
              />

              <motion.div
                style={settledCardStyle}
                className="dashboard-card-target absolute z-10 overflow-hidden rounded-[clamp(0.25rem,0.8vw,0.75rem)] border border-white/90 bg-white"
              >
                <Image
                  src="/dashboard-img/income-source.png"
                  alt="Income sources breakdown"
                  fill
                  priority
                  sizes="(max-width: 640px) 28vw, 320px"
                  className="object-cover"
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
