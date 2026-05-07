"use client";

import Image from "next/image";
import {
  ArrowRight,
  CheckCircle2,
  MessageCircle,
  MousePointer2,
  ShoppingBag,
  Sparkles,
} from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { heroStats, product } from "@/lib/mock-data";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

const particles = [
  { x: "8%", y: "28%", size: 10, delay: 0 },
  { x: "18%", y: "74%", size: 7, delay: 0.4 },
  { x: "42%", y: "18%", size: 8, delay: 0.9 },
  { x: "72%", y: "20%", size: 12, delay: 0.2 },
  { x: "86%", y: "64%", size: 9, delay: 0.7 },
  { x: "55%", y: "78%", size: 6, delay: 1.1 },
  { x: "94%", y: "34%", size: 7, delay: 0.5 },
];

export function HeroSection() {
  const heroRef = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], [0, 130]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);
  const imageOpacity = useTransform(scrollYProgress, [0, 0.82], [1, 0.38]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, -70]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.68], [1, 0.18]);
  const particleY = useTransform(scrollYProgress, [0, 1], [0, -90]);

  return (
    <section
      ref={heroRef}
      id="home"
      className="relative isolate min-h-[calc(100svh-4rem)] overflow-hidden border-b border-white/10 bg-[radial-gradient(circle_at_70%_36%,rgba(255,255,255,0.05),transparent_30%),linear-gradient(135deg,#0a0a0a_0%,#1a1a1a_45%,#0f0f0f_100%)]"
    >
      <div className="absolute inset-0 warm-grid opacity-25" aria-hidden="true" />
      <div
        className="absolute left-1/2 top-[16%] h-[380px] w-[380px] -translate-x-1/2 rounded-full bg-primary/[0.12] blur-[120px] sm:h-[560px] sm:w-[560px]"
        aria-hidden="true"
      />
      {particles.map((particle, index) => (
        <motion.span
          key={`${particle.x}-${particle.y}`}
          className="absolute z-10 rounded-full bg-[radial-gradient(circle_at_35%_35%,#ffffff,#e0e0e0_66%,#a0a0a0)] shadow-[0_0_18px_rgba(255,255,255,0.3)]"
          style={{
            left: particle.x,
            top: particle.y,
            width: particle.size,
            height: particle.size,
            y: particleY,
          }}
          animate={{
            y: [0, index % 2 === 0 ? -18 : 16, 0],
            x: [0, index % 2 === 0 ? 10 : -10, 0],
            opacity: [0.35, 0.9, 0.45],
            scale: [1, 1.18, 1],
          }}
          transition={{
            duration: 5.5 + index * 0.4,
            delay: particle.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          aria-hidden="true"
        />
      ))}

      <motion.div
        className="absolute inset-y-0 right-[-18%] z-0 w-[118%] sm:right-[-14%] lg:right-0 lg:w-[70%]"
        style={{ y: imageY, scale: imageScale, opacity: imageOpacity }}
        aria-hidden="true"
      >
        <Image
          src="/images/cinematic-makhana-hero.png"
          alt=""
          fill
          priority
          sizes="(max-width: 768px) 120vw, 70vw"
          className="object-cover object-[68%_50%] opacity-85"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,#0a0a0a_0%,rgba(10,10,10,0.78)_24%,rgba(10,10,10,0.18)_58%,rgba(10,10,10,0.22)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_58%,transparent_0%,rgba(5,4,3,0.18)_45%,rgba(5,4,3,0.74)_100%)]" />
      </motion.div>

      <div className="container relative z-20 grid min-h-[calc(100svh-4rem)] items-center py-12 sm:py-16 lg:grid-cols-[0.86fr_1.14fr]">
        <motion.div
          className="max-w-3xl"
          style={{ y: textY, opacity: textOpacity }}
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.1 } },
          }}
        >
          <motion.div
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/30 bg-black/34 px-4 py-2 text-sm font-semibold text-white shadow-[0_0_34px_rgba(255,255,255,0.15)] backdrop-blur-xl"
            variants={{
              hidden: { opacity: 0, y: 18 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <CheckCircle2 className="h-4 w-4" aria-hidden="true" />
            Premium plain makhana, made easy to order
          </motion.div>

          <motion.h1
            className="max-w-[9ch] text-5xl font-black uppercase leading-[0.92] tracking-tight text-foreground sm:text-7xl lg:text-8xl"
            variants={{
              hidden: { opacity: 0, y: 26, filter: "blur(10px)" },
              visible: { opacity: 1, y: 0, filter: "blur(0px)" },
            }}
            transition={{ duration: 0.75, ease: "easeOut" }}
          >
            Kamal Makhana
          </motion.h1>

          <motion.div
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-[linear-gradient(135deg,#ffffff,#d3d3d3)] px-4 py-2 text-sm font-bold text-primary-foreground shadow-[0_20px_55px_rgba(255,255,255,0.2)]"
            variants={{
              hidden: { opacity: 0, y: 18 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <Sparkles className="h-4 w-4" aria-hidden="true" />
            {product.tagline}
          </motion.div>

          <motion.p
            className="mt-6 max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg"
            variants={{
              hidden: { opacity: 0, y: 18 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            A cinematic, clean, and crunchy snack experience for families,
            premium buyers, and local customers who want trustworthy quality
            without a complicated buying process.
          </motion.p>

          <motion.div
            className="mt-8 flex flex-col gap-3 sm:flex-row"
            variants={{
              hidden: { opacity: 0, y: 18 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <a href="#order" className={cn(buttonVariants({ size: "lg" }))}>
              <ShoppingBag className="h-5 w-5" aria-hidden="true" />
              Order Now
            </a>
            <a
              href="#product"
              className={cn(buttonVariants({ variant: "outline", size: "lg" }))}
            >
              View Product
              <ArrowRight className="h-5 w-5" aria-hidden="true" />
            </a>
            <a
              href="#contact"
              className={cn(buttonVariants({ variant: "secondary", size: "lg" }))}
            >
              <MessageCircle className="h-5 w-5" aria-hidden="true" />
              Contact Us
            </a>
          </motion.div>

          <motion.div
            className="mt-10 grid max-w-xl grid-cols-3 gap-3"
            variants={{
              hidden: { opacity: 0, y: 18 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            {heroStats.map((stat) => (
              <div
                key={stat.label}
                className="cinematic-panel rounded-xl p-4 text-center"
              >
                <p className="text-2xl font-black text-primary">{stat.value}</p>
                <p className="mt-1 text-[0.68rem] font-bold uppercase tracking-[0.16em] text-muted-foreground">
                  {stat.label}
                </p>
              </div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          className="pointer-events-none absolute bottom-6 right-4 hidden items-center gap-2 rounded-full border border-white/10 bg-black/35 px-4 py-2 text-sm font-semibold text-muted-foreground backdrop-blur-xl md:flex"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
        >
          <MousePointer2 className="h-4 w-4 text-primary" aria-hidden="true" />
          Scroll for cinematic motion
        </motion.div>
      </div>
    </section>
  );
}
