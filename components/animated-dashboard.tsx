"use client";

import Image from "next/image";
import { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useReducedMotion,
} from "framer-motion";

export default function AnimatedDashboard() {
  const sceneRef = useRef<HTMLDivElement>(null);

  const shouldReduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: sceneRef,
    offset: ["start start", "end 100%"],
  });

  const progress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 25,
    mass: 0.3,
  });

  // Dashboard animation
  const dashboardY = useTransform(progress, [0, 0.8], [70, 0]);
  const dashboardScale = useTransform(progress, [0, 0.8], [0.9, 1]);
  const dashboardRotateX = useTransform(progress, [0, 0.8], [10, 0]);

  // Income Card (Left)
  const incomeX = useTransform(progress, [0.1, 0.85], [-80, 0]);
  const incomeY = useTransform(progress, [0.1, 0.85], [-40, 0]);
  const incomeScale = useTransform(progress, [0.1, 0.85], [1.15, 1]);
  const incomeRotate = useTransform(progress, [0.1, 0.85], [-5, 0]);

  // Liquidity Card
  const liquidityX = useTransform(progress, [0.15, 0.85], [80, 0]);
  const liquidityY = useTransform(progress, [0.15, 0.85], [-50, 0]);
  const liquidityScale = useTransform(progress, [0.15, 0.85], [1.12, 1]);
  const liquidityRotate = useTransform(progress, [0.15, 0.85], [5, 0]);

  // Reduction Card
  const reductionX = useTransform(progress, [0.18, 0.85], [120, 0]);
  const reductionY = useTransform(progress, [0.18, 0.85], [-240, 0]);
  const reductionScale = useTransform(progress, [0.18, 0.85], [1.2, 1]);
  const reductionRotate = useTransform(progress, [0.18, 0.85], [6, 0]);

  // Bottom Card
  const yearlyX = useTransform(progress, [0.22, 0.9], [0, 0]);
  const yearlyY = useTransform(progress, [0.22, 0.9], [80, 0]);
  const yearlyScale = useTransform(progress, [0.22, 0.9], [1.08, 1]);

  return (
    <section ref={sceneRef} className="relative  min-h-[950px]">
      <div className="top-0 flex sticky items-center justify-center ">
        <motion.div
          style={
            shouldReduceMotion
              ? {}
              : {
                  y: dashboardY,
                  scale: dashboardScale,
                  rotateX: dashboardRotateX,
                }
          }
          className="relative h-[900px] w-[1200px]  rounded-2xl p-2"
        >
          <Image
            src="/dashboard-img/layout.png"
            className="object-cover rounded-2xl object-center"
            alt="layout-dashboard"
            fill
          />

          <div className="absolute top-48 left-40 z-10 grid h-[580px] w-[960px] grid-cols-4 grid-rows-2 gap-x-4">
            {/* Income */}
            <div className="col-span-2 row-span-4 rounded-xl border border-dashed border-gray-300">
              <motion.div
                className="relative h-full w-full"
                style={{
                  x: incomeX,
                  y: incomeY,
                  scale: incomeScale,
                  rotate: incomeRotate,
                }}
              >
                <Image
                  src="/dashboard-img/income.avif"
                  alt="income"
                  fill
                  className="rounded-xl object-cover"
                />
              </motion.div>
            </div>

            <div className="col-span-2 mb-4 grid grid-cols-2 gap-4">
              {/* Liquidity */}
              <div className="rounded-xl border border-dashed border-gray-300">
                <motion.div
                  className="relative size-full"
                  style={{
                    x: liquidityX,
                    y: liquidityY,
                    scale: liquidityScale,
                    rotate: liquidityRotate,
                  }}
                >
                  <Image
                    src="/dashboard-img/liquidity.avif"
                    alt="liquidity"
                    fill
                    className="rounded-xl object-cover"
                  />
                </motion.div>
              </div>

              {/* Reduction */}
              <div className="relative rounded-xl border border-dashed border-gray-300">
                <motion.div
                  className="relative size-full"
                  style={{
                    x: reductionX,
                    y: reductionY,
                    scale: reductionScale,
                    rotate: reductionRotate,
                  }}
                >
                  <Image
                    src="/dashboard-img/reduction.avif"
                    alt="reduction"
                    fill
                    className="rounded-xl object-cover"
                  />
                </motion.div>
              </div>
            </div>

            {/* Bottom Card */}
            <div className="relative col-span-2 rounded-xl border border-dashed border-gray-300">
              <motion.div
                className="relative size-full"
                style={{
                  y: yearlyY,
                  x: yearlyX,
                  scale: yearlyScale,
                }}
              >
                <Image
                  src="/dashboard-img/income-source.png"
                  alt="yearly progress"
                  fill
                  className="rounded-xl object-cover"
                />
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
