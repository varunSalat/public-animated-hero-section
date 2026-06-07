"use client";

import { useRef } from "react";
import { useScroll, useSpring } from "framer-motion";
import AnimatedDashboard from "./animated-dashboard";
import DashboardHeader from "./dashboard-header";

const HeroSection = () => {
  const heroRef = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end end"],
  });

  const progress = useSpring(scrollYProgress, {
    stiffness: 110,
    damping: 28,
    mass: 0.22,
  });

  return (
    <section ref={heroRef}>
      <DashboardHeader />
      {/* DASHBOARD */}
      <AnimatedDashboard progress={progress} />
    </section>
  );
};

export default HeroSection;
