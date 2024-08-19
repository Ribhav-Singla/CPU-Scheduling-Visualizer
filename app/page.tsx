"use client";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <>
      <div className="flex flex-col justify-center items-center landing_container">
        <motion.h1
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
            transition: {
              delay: 0.5,
            },
          }}
          className="landing_page_title font-bold text-[2.9rem] sm:text-[5rem] p-10 w-fit"
        >
          <span className="cpu">CPU</span> Scheduling Visualizer
        </motion.h1>
        <motion.div
          initial={{
            opacity: 0,
            y: 100,
            scale: 0.5,
          }}
          animate={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          transition={{
            duration: 0.5,
          }}
          
        >
          <Link
            href={"/algorithms"}
            className="landing_page_btn_start font-bold"
          >
            Get started <span className="right_arrow">&#8594;</span>
          </Link>
        </motion.div>
      </div>
    </>
  );
}
