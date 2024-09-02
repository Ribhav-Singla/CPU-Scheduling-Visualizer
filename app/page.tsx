"use client";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <>
      <div className="landing_page_cont">
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
            className="landing_page_title font-bold text-[2.9rem] sm:text-[5rem] p-10 w-fit text-center"
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
              className="landing_page_btn_start font-bold text-lg"
            >
              Get started <span className="right_arrow">&#8594;</span>
            </Link>
          </motion.div>
        </div>

        <div className="flex gap-10 mt-20">
          <div className="text-justify border-e-2 border-black p-12">
            <ul>
              <li>
                <strong>First-Come, First-Served (FCFS):</strong> Processes are
                executed in the order they arrive, with no preemption. Once a
                process starts, it runs to completion. This is the simplest
                scheduling algorithm.
              </li>
              <br />
              <li>
                <strong>Shortest Job First (SJF) Preemptive:</strong> Also known
                as Shortest Remaining Time First (SRTF). The process with the
                shortest remaining execution time is selected next. If a new
                process arrives with a shorter burst time, the current process
                is preempted.
              </li>
              <br />
              <li>
                <strong>Shortest Job First (SJF) Non-Preemptive:</strong> The
                process with the shortest burst time is selected and runs to
                completion before the next process is chosen. Once a process
                starts, it is not preempted until it finishes.
              </li>
            </ul>
          </div>
          <div className="text-justify pe-10 py-12">
            <ul>
              <li>
                <strong>Priority Scheduling (Preemptive):</strong> Processes are
                assigned a priority, and the CPU is allocated to the process
                with the highest priority. If a new process with a higher
                priority arrives, it preempts the current process.
              </li>
              <br />
              <li>
                <strong>Priority Scheduling (Non-Preemptive):</strong> Similar
                to preemptive priority scheduling, but once a process starts, it
                runs to completion, regardless of any higher-priority processes
                that may arrive.
              </li>
              <br />
              <li>
                <strong>Round Robin (RR):</strong> Each process is assigned a
                fixed time quantum. The CPU cycles through the processes in a
                circular order, giving each process a turn. If a process doesn’t
                complete within its time quantum, it is placed back in the queue
                to await its next turn.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
