import { ganntChart_processState } from "../(recoil)/store";
import { ganntChart_startTimeState } from "../(recoil)/store";
import { useRecoilValue } from "recoil";
import {motion} from 'framer-motion';

type Process = {
  pid: number;
  time: number;
};

export default function GanttChart() {
  const ganntChartProcesses = useRecoilValue(ganntChart_processState);
  const ganntChartStartTime = useRecoilValue(ganntChart_startTimeState);

  return (
    <div className="p-5 gantt-chart-container">
      <div className="mb-3">
        <h1 className="font-bold">Gantt Chart</h1>
      </div>

      {ganntChartProcesses.length === 0 ? (
        <div className="border border-gray-200 rounded-lg p-6 text-center">
          <div className="text-4xl mb-3">📊</div>
          <h3 className="font-semibold text-gray-800 mb-2">Gantt Chart Visualization</h3>
          <p className="text-gray-600 text-sm max-w-md mx-auto">
            The Gantt chart will appear here once you run a scheduling algorithm. It displays the 
            execution timeline of processes, showing which process runs at each time unit. Each block 
            represents a process with its ID, and timestamps below indicate execution boundaries.
          </p>
          <p className="text-gray-500 text-xs mt-3">
            Select an algorithm, add processes, and click &quot;Submit&quot; to see the visualization.
          </p>
        </div>
      ) : (
      <div className="ganntChart">
        <div className="flex">
          <div className="w-16">
            <div className="bg-slate-200 py-3 text-center text-lg font-bold border-2 border-black rounded-md">
              <p>start</p>
            </div>
            <p className="text-end font-bold text-lg ">{ganntChartStartTime}</p>
          </div>

          {ganntChartProcesses.map((item: Process, index) => {
            return (
              <motion.div
              initial={{
                opacity: 0,
                x: 810,
                scale: 0.5,
              }}
              animate={{
                opacity: 1,
                x: 0,
                scale: 1,
              }}
              transition={{
                duration: 1,
              }}
               className="w-16" key={index}>
                <div className="bg-slate-200 py-3 text-center text-lg font-bold border-2 border-black rounded-md">
                  {item.pid == -1 ? (
                    "idle"
                  ) : (
                    <p>
                      P<sub>{item.pid}</sub>
                    </p>
                  )}
                </div>
                <p className="text-end font-bold text-lg ">{item.time}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
      )}
    </div>
  );
}
