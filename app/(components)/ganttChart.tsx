import { ganntChart_processState } from "../(recoil)/store";
import { ganntChart_startTimeState } from "../(recoil)/store";
import { useRecoilValue } from "recoil";

type Process = {
  pid: number;
  time: number;
};

export default function GanttChart() {
  const ganntChartProcesses = useRecoilValue(ganntChart_processState);
  const ganntChartStartTime = useRecoilValue(ganntChart_startTimeState);

  return (
    <div className="p-5">
      <div className="mb-3">
        <h1 className="font-bold">Gantt Chart</h1>
      </div>

      <div className="flex">
        <div className="w-16">
          <div className="bg-slate-200 py-3 text-center text-lg font-bold border-2 border-black rounded-md">
            <p>start</p>
          </div>
          <p className="text-end font-bold text-lg ">{ganntChartStartTime}</p>
        </div>

        {ganntChartProcesses.map((item: Process, index) => {
          return (
            <div className="w-16" key={index}>
              <div className="bg-slate-200 py-3 text-center text-lg font-bold border-2 border-black rounded-md">
                {item.pid == -1 ? (
                  "CPU"
                ) : (
                  <p>
                    P<sub>{item.pid}</sub>
                  </p>
                )}
              </div>
              <p className="text-end font-bold text-lg ">{item.time}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}