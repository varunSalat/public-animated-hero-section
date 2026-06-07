"use client";

import Image from "next/image";
import type { MotionValue } from "framer-motion";
import { motion, useTransform, useReducedMotion } from "framer-motion";

export default function AnimatedDashboard({
  progress,
}: {
  progress: MotionValue<number>;
}) {
  const shouldReduceMotion = useReducedMotion();

  // Dashboard animation
  const dashboardRotateX = useTransform(progress, [0, 0.8], [10, 0]);

  // Income Card (Left)
  const incomeX = useTransform(progress, [0.1, 0.85], [-55, 0]);
  const incomeY = useTransform(progress, [0.1, 0.85], [-55, 0]);
  const incomeScale = useTransform(progress, [0.1, 0.85], [0.9, 1]);
  const incomeRotate = useTransform(progress, [0.1, 0.85], [-8, 0]);
  const incomeRotateX = useTransform(progress, [0.1, 0.85], [11, 0]);
  const incomeRotateY = useTransform(progress, [0.1, 0.85], [-2, 0]);
  // Liquidity Card
  const liquidityX = useTransform(progress, [0.15, 0.85], [-74, 0]);
  const liquidityY = useTransform(progress, [0.15, 0.85], [-202, 0]);
  const liquidityScale = useTransform(progress, [0.15, 0.85], [0.9, 1]);
  const liquidityRotate = useTransform(progress, [0.15, 0.85], [-10, 0]);
  const liquidityRotateX = useTransform(progress, [0.15, 0.85], [5, 0]);
  const liquidityRotateY = useTransform(progress, [0.15, 0.85], [-8, 0]);
  // Reduction Card
  const reductionX = useTransform(progress, [0.18, 0.85], [96, 0]);
  const reductionY = useTransform(progress, [0.18, 0.85], [-400, 0]);
  const reductionScale = useTransform(progress, [0.18, 0.85], [1.0787, 1]);
  const reductionRotate = useTransform(progress, [0.18, 0.85], [7.87, 0]);
  const reductionRotateX = useTransform(progress, [0.18, 0.85], [0.787, 0]);
  const reductionRotateY = useTransform(progress, [0.18, 0.85], [7.87, 0]);

  // Bottom Card
  const yearlyX = useTransform(progress, [0.22, 0.9], [31.8834, 0]);
  const yearlyY = useTransform(progress, [0.22, 0.9], [-21.2556, 0]);
  const yearlyScale = useTransform(progress, [0.22, 0.9], [1.08857, 1]);
  const yearlyRotate = useTransform(progress, [0.22, 0.9], [2.65695, 0]);

  return (
    <section className="relative  min-h-[950px]">
      <div className="top-0 flex sticky items-center justify-center ">
        <motion.div
          style={
            shouldReduceMotion
              ? {}
              : {
                  rotateX: dashboardRotateX,
                  transformPerspective: 1200,
                  willChange: "transform",
                }
          }
          className="relative h-[900px] w-[1200px] rounded-2xl p-2"
        >
          <Image
            src="/dashboard-img/layout.png"
            className="object-cover rounded-2xl object-center"
            alt="layout-dashboard"
            fill
          />

          <div className="absolute top-48 left-40 z-10 grid h-[580px] w-[min(960px,95vw)] grid-cols-4 grid-rows-2 gap-x-4">
            {/* Income */}
            <div className="col-span-2 row-span-4 rounded-xl border border-dashed border-gray-300">
              <motion.div
                className="relative h-full w-full"
                style={{
                  willChange: "transform",
                  x: incomeX,
                  y: incomeY,

                  scale: incomeScale,

                  rotate: incomeRotate,
                  rotateX: incomeRotateX,
                  rotateY: incomeRotateY,

                  transformPerspective: 1200,
                  transformStyle: "preserve-3d",
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
                    willChange: "transform",

                    x: liquidityX,
                    y: liquidityY,

                    scale: liquidityScale,

                    rotate: liquidityRotate,
                    rotateX: liquidityRotateX,
                    rotateY: liquidityRotateY,

                    transformPerspective: 2342,
                    transformStyle: "preserve-3d",
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
                    willChange: "transform",
                    x: reductionX,
                    y: reductionY,
                    scale: reductionScale,
                    rotate: reductionRotate,
                    rotateX: reductionRotateX,
                    rotateY: reductionRotateY,
                    transformPerspective: 1200,
                    transformStyle: "preserve-3d",
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
                  willChange: "transform",

                  x: yearlyX,
                  y: yearlyY,

                  scale: yearlyScale,
                  rotate: yearlyRotate,

                  transformPerspective: 1200,
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
