"use client";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Footer from "./(components)/footer";
import FeedbackButton from "./(components)/FeedbackButton";

export default function Home() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  return (
    <>
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="max-w-[1280px] w-full mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col justify-center items-center pt-10 pb-12">
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                transition: { delay: 0.3 },
              }}
              className="landing_page_title font-extrabold text-4xl md:text-5xl lg:text-6xl xl:text-7xl p-5 w-full text-center"
            >
              <span className="cpu">CPU</span> Scheduling Visualizer
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                transition: { delay: 0.3 },
              }}
              className="text-lg md:text-xl text-gray-600 text-center max-w-3xl mt-4 px-4"
            >
              Master operating system concepts with our free interactive CPU scheduling simulator. 
              Visualize FCFS, SJF, Round Robin, and Priority scheduling algorithms with real-time Gantt charts.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 100, scale: 0.5 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="mt-8"
            >
              <Link
                href="/algorithms"
                className="landing_page_btn_start font-bold text-lg"
              >
                Get Started <span className="right_arrow">&#8594;</span>
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Main Educational Content */}
        <main className="max-w-[1280px] w-full mx-auto px-4 sm:px-6 lg:px-8 py-12">
          
          {/* What is CPU Scheduling Section */}
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
              What is CPU Scheduling?
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
              <p>
                <strong>CPU scheduling</strong> is a fundamental concept in operating systems that determines which process 
                runs on the CPU at any given time. When multiple processes are waiting to be executed, the operating system 
                must decide the order and duration for which each process gets access to the CPU. This decision-making process 
                is called CPU scheduling, and it&apos;s essential for maximizing CPU utilization and ensuring fair resource allocation.
              </p>
              <p>
                The component of the operating system responsible for these decisions is called the <strong>CPU scheduler</strong> 
                or <strong>short-term scheduler</strong>. It selects processes from the ready queue and allocates CPU time to them 
                based on specific algorithms. Understanding CPU scheduling is crucial for computer science students, software engineers, 
                and anyone preparing for technical interviews or examinations like GATE.
              </p>
              <p>
                Modern operating systems like Windows, Linux, and macOS all use sophisticated scheduling algorithms to manage 
                processes efficiently. These algorithms aim to optimize various performance metrics including CPU utilization, 
                throughput, turnaround time, waiting time, and response time.
              </p>
            </div>
          </section>

          {/* Why CPU Scheduling is Important */}
          <section className="mb-16 bg-gray-50 rounded-2xl p-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
              Why is CPU Scheduling Important in Operating Systems?
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
              <p>
                CPU scheduling plays a critical role in the overall performance and efficiency of computer systems. 
                Here&apos;s why it&apos;s so important:
              </p>
              <ul className="list-disc pl-6 space-y-3">
                <li>
                  <strong>Maximizing CPU Utilization:</strong> The CPU is one of the most expensive resources in a computer. 
                  Effective scheduling ensures the CPU stays busy and productive, minimizing idle time.
                </li>
                <li>
                  <strong>Fair Resource Distribution:</strong> Scheduling algorithms ensure all processes get fair access 
                  to CPU time, preventing any single process from monopolizing system resources.
                </li>
                <li>
                  <strong>Improved System Throughput:</strong> By efficiently managing process execution, scheduling 
                  increases the number of processes completed per unit of time.
                </li>
                <li>
                  <strong>Better User Experience:</strong> Proper scheduling reduces response time, making systems 
                  feel more responsive to user interactions.
                </li>
                <li>
                  <strong>Priority Management:</strong> Critical system processes can be given higher priority, 
                  ensuring important tasks are completed promptly.
                </li>
              </ul>
            </div>
          </section>

          {/* Types of CPU Scheduling Algorithms */}
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
              Types of CPU Scheduling Algorithms
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              CPU scheduling algorithms can be broadly classified into two categories: <strong>preemptive</strong> and 
              <strong> non-preemptive</strong>. In preemptive scheduling, a running process can be interrupted and moved 
              to the ready queue if a higher-priority process arrives. In non-preemptive scheduling, once a process starts 
              executing, it runs until completion or voluntarily releases the CPU.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* FCFS */}
              <div className="bg-white rounded-xl shadow-md p-6 relative overflow-hidden">
                <div className="absolute top-0 left-0 bottom-0 w-1 rounded-l-xl" style={{ background: 'linear-gradient(to bottom, #12acee, #5df488)' }}></div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  First-Come, First-Served (FCFS)
                </h3>
                <p className="text-gray-700 mb-3">
                  FCFS is the simplest CPU scheduling algorithm. Processes are executed in the exact order they arrive 
                  in the ready queue. It&apos;s a non-preemptive algorithm, meaning once a process starts, it runs until completion.
                </p>
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="text-sm text-gray-600">
                    <strong>Pros:</strong> Simple to implement, no starvation<br/>
                    <strong>Cons:</strong> Convoy effect, high average waiting time<br/>
                    <strong>Best for:</strong> Batch systems, simple applications
                  </p>
                </div>
              </div>

              {/* SJF Non-Preemptive */}
              <div className="bg-white rounded-xl shadow-md p-6 relative overflow-hidden">
                <div className="absolute top-0 left-0 bottom-0 w-1 rounded-l-xl" style={{ background: 'linear-gradient(to bottom, #12acee, #5df488)' }}></div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  Shortest Job First (SJF) - Non-Preemptive
                </h3>
                <p className="text-gray-700 mb-3">
                  SJF selects the process with the smallest burst time from the ready queue. Once selected, 
                  the process runs to completion. This algorithm provides minimum average waiting time among 
                  all non-preemptive algorithms.
                </p>
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="text-sm text-gray-600">
                    <strong>Pros:</strong> Optimal average waiting time<br/>
                    <strong>Cons:</strong> Starvation for long processes, requires burst time prediction<br/>
                    <strong>Best for:</strong> Environments where burst times are known
                  </p>
                </div>
              </div>

              {/* SJF Preemptive (SRTF) */}
              <div className="bg-white rounded-xl shadow-md p-6 relative overflow-hidden">
                <div className="absolute top-0 left-0 bottom-0 w-1 rounded-l-xl" style={{ background: 'linear-gradient(to bottom, #12acee, #5df488)' }}></div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  Shortest Remaining Time First (SRTF)
                </h3>
                <p className="text-gray-700 mb-3">
                  SRTF is the preemptive version of SJF. If a new process arrives with a shorter burst time 
                  than the remaining time of the current process, the current process is preempted. This provides 
                  the optimal average waiting time among all scheduling algorithms.
                </p>
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="text-sm text-gray-600">
                    <strong>Pros:</strong> Optimal average waiting time, responsive<br/>
                    <strong>Cons:</strong> High overhead, starvation possible<br/>
                    <strong>Best for:</strong> Time-sharing systems
                  </p>
                </div>
              </div>

              {/* Round Robin */}
              <div className="bg-white rounded-xl shadow-md p-6 relative overflow-hidden">
                <div className="absolute top-0 left-0 bottom-0 w-1 rounded-l-xl" style={{ background: 'linear-gradient(to bottom, #12acee, #5df488)' }}></div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  Round Robin (RR)
                </h3>
                <p className="text-gray-700 mb-3">
                  Round Robin assigns a fixed time quantum to each process. The CPU cycles through processes 
                  in a circular manner. If a process doesn&apos;t complete within its quantum, it&apos;s placed at 
                  the end of the queue. This ensures fair CPU distribution.
                </p>
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="text-sm text-gray-600">
                    <strong>Pros:</strong> Fair, no starvation, good response time<br/>
                    <strong>Cons:</strong> Performance depends on quantum size<br/>
                    <strong>Best for:</strong> Time-sharing and interactive systems
                  </p>
                </div>
              </div>

              {/* Priority Preemptive */}
              <div className="bg-white rounded-xl shadow-md p-6 relative overflow-hidden">
                <div className="absolute top-0 left-0 bottom-0 w-1 rounded-l-xl" style={{ background: 'linear-gradient(to bottom, #12acee, #5df488)' }}></div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  Priority Scheduling (Preemptive)
                </h3>
                <p className="text-gray-700 mb-3">
                  Each process is assigned a priority. The CPU is allocated to the highest priority process. 
                  If a new process with higher priority arrives, it preempts the current process. Lower numbers 
                  typically indicate higher priority.
                </p>
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="text-sm text-gray-600">
                    <strong>Pros:</strong> Important processes run first<br/>
                    <strong>Cons:</strong> Starvation of low-priority processes<br/>
                    <strong>Solution:</strong> Aging technique to prevent starvation
                  </p>
                </div>
              </div>

              {/* Priority Non-Preemptive */}
              <div className="bg-white rounded-xl shadow-md p-6 relative overflow-hidden">
                <div className="absolute top-0 left-0 bottom-0 w-1 rounded-l-xl" style={{ background: 'linear-gradient(to bottom, #12acee, #5df488)' }}></div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  Priority Scheduling (Non-Preemptive)
                </h3>
                <p className="text-gray-700 mb-3">
                  Similar to preemptive priority scheduling, but once a process starts executing, it runs 
                  to completion regardless of any higher-priority processes that may arrive during its execution.
                </p>
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="text-sm text-gray-600">
                    <strong>Pros:</strong> Less overhead than preemptive<br/>
                    <strong>Cons:</strong> Poor response time for high-priority arrivals<br/>
                    <strong>Best for:</strong> Batch processing with priorities
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* How This Visualizer Works */}
          <section className="mb-16 bg-gray-50 rounded-2xl p-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
              How This CPU Scheduling Visualizer Works
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
              <p>
                Our CPU Scheduling Visualizer is designed to help you understand and compare different scheduling 
                algorithms through interactive visualization. Here&apos;s how to use it:
              </p>
              <ol className="list-decimal pl-6 space-y-3">
                <li>
                  <strong>Select an Algorithm:</strong> Choose from FCFS, SJF (Preemptive/Non-Preemptive), 
                  Round Robin, or Priority Scheduling (Preemptive/Non-Preemptive).
                </li>
                <li>
                  <strong>Add Processes:</strong> Enter process details including arrival time, burst time, 
                  and priority (if applicable). You can add multiple processes to simulate real scenarios.
                </li>
                <li>
                  <strong>Set Time Quantum:</strong> For Round Robin algorithm, specify the time quantum value 
                  that determines how long each process runs before switching.
                </li>
                <li>
                  <strong>Run the Simulation:</strong> Click the execute button to see the scheduling in action. 
                  Watch as the Gantt chart generates showing the execution timeline.
                </li>
                <li>
                  <strong>Analyze Results:</strong> Review the output table showing completion time, turnaround time, 
                  waiting time, and response time for each process. Compare average metrics across algorithms.
                </li>
                <li>
                  <strong>Export Results:</strong> Download your results as a PDF for assignments, study notes, 
                  or documentation purposes.
                </li>
              </ol>
            </div>
            <div className="mt-8 text-center">
              <Link
                href="/algorithms"
                className="inline-block text-white font-bold py-3 px-8 rounded-lg hover:shadow-lg transition-all duration-300 hover:opacity-90"
                style={{ background: 'linear-gradient(to right, #12acee, #5df488)' }}
              >
                Try the Visualizer Now →
              </Link>
            </div>
          </section>

          {/* Key Metrics Explained */}
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
              Understanding CPU Scheduling Metrics
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700 mb-8">
              <p>
                To effectively compare scheduling algorithms, you need to understand the key performance metrics. 
                Our visualizer calculates all of these automatically for each process:
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <motion.div 
                className="bg-white rounded-xl shadow-md p-6 text-center cursor-pointer"
                whileHover={{ 
                  scale: 1.02,
                  rotateX: 0,
                  rotateY: 0,
                  boxShadow: "0 25px 50px rgba(0,0,0,0.15)"
                }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
                style={{ transformStyle: "preserve-3d" }}
              >
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">⏱️</span>
                </div>
                <h3 className="font-bold text-lg mb-2">Arrival Time</h3>
                <p className="text-gray-600 text-sm">
                  The time at which a process enters the ready queue and becomes available for execution.
                </p>
              </motion.div>
              <motion.div 
                className="bg-white rounded-xl shadow-md p-6 text-center cursor-pointer"
                whileHover={{ 
                  scale: 1.02,
                  rotateX: 0,
                  rotateY: 0,
                  boxShadow: "0 25px 50px rgba(0,0,0,0.15)"
                }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
                style={{ transformStyle: "preserve-3d" }}
              >
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">⚡</span>
                </div>
                <h3 className="font-bold text-lg mb-2">Burst Time</h3>
                <p className="text-gray-600 text-sm">
                  The total CPU time required by a process to complete its execution.
                </p>
              </motion.div>
              <motion.div 
                className="bg-white rounded-xl shadow-md p-6 text-center cursor-pointer"
                whileHover={{ 
                  scale: 1.02,
                  rotateX: 0,
                  rotateY: 0,
                  boxShadow: "0 25px 50px rgba(0,0,0,0.15)"
                }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
                style={{ transformStyle: "preserve-3d" }}
              >
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🔄</span>
                </div>
                <h3 className="font-bold text-lg mb-2">Turnaround Time</h3>
                <p className="text-gray-600 text-sm">
                  Total time from arrival to completion. Formula: Completion Time - Arrival Time.
                </p>
              </motion.div>
              <motion.div 
                className="bg-white rounded-xl shadow-md p-6 text-center cursor-pointer"
                whileHover={{ 
                  scale: 1.02,
                  rotateX: 0,
                  rotateY: 0,
                  boxShadow: "0 25px 50px rgba(0,0,0,0.15)"
                }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
                style={{ transformStyle: "preserve-3d" }}
              >
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">⏳</span>
                </div>
                <h3 className="font-bold text-lg mb-2">Waiting Time</h3>
                <p className="text-gray-600 text-sm">
                  Time spent waiting in the ready queue. Formula: Turnaround Time - Burst Time.
                </p>
              </motion.div>
            </div>
          </section>

          {/* Who Should Use This Tool */}
          <section className="mb-16 bg-gray-50 rounded-2xl p-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
              Who Should Use This CPU Scheduling Visualizer?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="font-bold text-xl mb-3 text-gray-800">🎓 Computer Science Students</h3>
                <p className="text-gray-700">
                  Perfect for understanding operating system concepts taught in undergraduate and graduate courses. 
                  Visualize algorithms you learn in class and reinforce your understanding.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="font-bold text-xl mb-3 text-gray-800">📚 GATE Exam Aspirants</h3>
                <p className="text-gray-700">
                  CPU scheduling is a frequently tested topic in GATE. Use this tool to practice problems 
                  and verify your manual calculations quickly.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="font-bold text-xl mb-3 text-gray-800">💼 Interview Preparation</h3>
                <p className="text-gray-700">
                  Operating system questions are common in software engineering interviews. Understand algorithms 
                  deeply by visualizing their behavior with different inputs.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="font-bold text-xl mb-3 text-gray-800">👨‍🏫 Educators & Professors</h3>
                <p className="text-gray-700">
                  Use this tool in your lectures to demonstrate scheduling algorithms visually. 
                  Export results for assignments and exam solutions.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="font-bold text-xl mb-3 text-gray-800">🔬 Researchers</h3>
                <p className="text-gray-700">
                  Compare algorithm performance across different scenarios. Useful for research papers 
                  and academic studies on process scheduling.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="font-bold text-xl mb-3 text-gray-800">🌱 Self-Learners</h3>
                <p className="text-gray-700">
                  Learning operating systems on your own? This visual approach makes complex concepts 
                  easier to grasp without formal instruction.
                </p>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section id="faq" className="mb-10 scroll-mt-20">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {[
                {
                  q: "What is the difference between preemptive and non-preemptive scheduling?",
                  a: "In preemptive scheduling, the operating system can interrupt a running process to allocate CPU to another process (e.g., one with higher priority or shorter burst time). In non-preemptive scheduling, once a process starts executing, it runs until completion or it voluntarily yields the CPU."
                },
                {
                  q: "Which CPU scheduling algorithm is best?",
                  a: "There's no single 'best' algorithm. FCFS is simplest but can have high waiting times. SJF provides optimal average waiting time but requires knowing burst times in advance. Round Robin is fair and works well for time-sharing systems. Priority scheduling is useful when processes have different importance levels. The best choice depends on your specific requirements."
                },
                {
                  q: "What is the convoy effect in FCFS?",
                  a: "The convoy effect occurs in FCFS when a long process arrives before several short processes. All the short processes must wait for the long process to complete, leading to poor CPU utilization and high average waiting times. It's like being stuck behind a slow truck on a single-lane road."
                },
                {
                  q: "How do I choose the right time quantum for Round Robin?",
                  a: "If the time quantum is too small, there's excessive context switching overhead. If it's too large, Round Robin degrades to FCFS. A good rule of thumb is to set the quantum such that about 80% of CPU bursts complete within one quantum. Typical values range from 10-100 milliseconds."
                },
                {
                  q: "What is starvation in CPU scheduling?",
                  a: "Starvation occurs when a process waits indefinitely because other processes keep getting CPU time. This commonly happens in SJF (long processes may never run) and Priority Scheduling (low-priority processes may starve). Solutions include aging, where process priority increases the longer it waits."
                },
              ].map((faq, index) => (
                <div key={index} className={`rounded-xl shadow-md overflow-hidden ${openFaqIndex === index ? 'bg-gray-50' : 'bg-white'}`}>
                  <button
                    onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                    className={`w-full p-6 text-left flex items-center justify-between gap-4 transition-colors ${openFaqIndex === index ? 'bg-gray-100' : 'hover:bg-gray-50'}`}
                    aria-expanded={openFaqIndex === index}
                  >
                    <h3 className="font-bold text-lg text-gray-800">{faq.q}</h3>
                    <motion.span
                      animate={{ rotate: openFaqIndex === index ? 180 : 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="text-gray-500 text-xl flex-shrink-0"
                    >
                      ↓
                    </motion.span>
                  </button>
                  <AnimatePresence initial={false}>
                    {openFaqIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <p className="px-6 pb-6 text-gray-700 pt-4">{faq.a}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </section>

        </main>

        <FeedbackButton />
        <Footer />
      </div>
    </>
  );
}
