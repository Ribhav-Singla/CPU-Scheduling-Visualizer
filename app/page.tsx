"use client";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <>
      <div className="landing_page_cont max-w-[1280px] w-full mx-auto">
        <div className="flex flex-col justify-center items-center landing_container pt-10">
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: { delay: 0.5 },
            }}
            className="landing_page_title font-extrabold text-4xl md:text-5xl lg:text-6xl xl:text-7xl p-5 w-full text-center"
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
            className="mt-5"
          >
            <Link
              href="/algorithms"
              className="landing_page_btn_start font-bold text-lg"
            >
              Get started <span className="right_arrow">&#8594;</span>
            </Link>
          </motion.div>
        </div>

        <div
          className="p-2 sm:p-5 md:p-8 lg:p-12 xl:p-16 mt-16 md:mt-20 grid grid-cols-1 lg:grid-cols-2 text-justify gap-x-12 gap-y-5"
          style={{ backgroundColor: "rgb(238, 238, 238)" }}
        >
          {[
            {
              title: "First-Come, First-Served (FCFS):",
              description:
                "Processes are executed in the order they arrive, with no preemption. Once a process starts, it runs to completion. This is the simplest scheduling algorithm.",
            },
            {
              title: "Priority Scheduling (Preemptive):",
              description:
                "Processes are assigned a priority, and the CPU is allocated to the process with the highest priority. If a new process with a higher priority arrives, it preempts the current process.",
            },
            {
              title: "Shortest Job First (SJF) Preemptive:",
              description:
                "Also known as Shortest Remaining Time First (SRTF). The process with the shortest remaining execution time is selected next. If a new process arrives with a shorter burst time, the current process is preempted.",
            },
            {
              title: "Priority Scheduling (Non-Preemptive):",
              description:
                "Similar to preemptive priority scheduling, but once a process starts, it runs to completion, regardless of any higher-priority processes that may arrive.",
            },
            {
              title: "Shortest Job First (SJF) Non-Preemptive:",
              description:
                "The process with the shortest burst time is selected and runs to completion before the next process is chosen. Once a process starts, it is not preempted until it finishes.",
            },
            {
              title: "Round Robin (RR):",
              description:
                "Each process is assigned a fixed time quantum. The CPU cycles through the processes in a circular order, giving each process a turn. If a process doesn’t complete within its time quantum, it is placed back in the queue to await its next turn.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="col-span-1 px-5 sm:px-8 md:px-4 lg:px-0"
            >
              <ul>
                <li>
                  <strong>{item.title}</strong> {item.description}
                </li>
              </ul>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
