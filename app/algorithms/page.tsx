"use client";
import { Button } from "@/components/ui/button";
import GanttChart from "../(components)/ganttChart";
import SelectAlgorithm from "../(components)/selectAlgorithm";
import ProcessInserter from "../(components)/processInserter";
import InputProcessTable from "../(components)/inputProcessTable";
import OutputProcessTable from "../(components)/outputProcessTable";
import { algorithmState } from "../(recoil)/store";
import { processesState } from "../(recoil)/store";
import { timeQuantumState } from "../(recoil)/store";
import { currAlgorithmState } from "../(recoil)/store";
import { outputProcessesState } from "../(recoil)/store";
import { useRecoilValue, useSetRecoilState } from "recoil";
import axios from "axios";

export default function () {
  const algorithm = useRecoilValue(algorithmState);
  const processes = useRecoilValue(processesState);
  const time_quantum = useRecoilValue(timeQuantumState)
  const currAlgorithm = useSetRecoilState(currAlgorithmState);
  const setOutputProcessesState = useSetRecoilState(outputProcessesState);

  const handleSubmit = async () => {
    // fcfs algorithm
    if (algorithm === "fcfs") {
      if (processes.length == 0) {
        alert("Please add processes");
      } else {
        currAlgorithm(algorithm);
        try {
          const response = await axios.post("/api/fcfs", {
            n: processes.length,
            processes: processes,
          });
          setOutputProcessesState(JSON.parse(response.data.output));
        } catch (error) {
          console.log("error occured while running fcfs: ", error);
        }
      }
    }

    // sjf algorithm
    else if (algorithm === "sjf_non_preemptive") {
      if (processes.length == 0) {
        alert("Please add processes");
      } else {
        currAlgorithm(algorithm);
        try {
          const response = await axios.post("/api/sjf_non_preemptive", {
            n: processes.length,
            processes: processes,
          });
          setOutputProcessesState(JSON.parse(response.data.output));
        } catch (error) {
          console.log("error occured while running sjf: ", error);
        }
      }
    }

    // sjf_non_preemptive
    else if (algorithm === "sjf_preemptive") {
      if (processes.length == 0) {
        alert("Please add processes");
      } else {
        currAlgorithm(algorithm);
        try {
          const response = await axios.post("/api/sjf_preemptive", {
            n: processes.length,
            processes: processes,
          });
          setOutputProcessesState(JSON.parse(response.data.output));
        } catch (error) {
          console.log("error occured while running sjf: ", error);
        }
      }
    }

    // priority_preemptive
    else if (algorithm === "priority_preemptive") {
      if (processes.length == 0) {
        alert("Please add processes");
      } else {
        currAlgorithm(algorithm);
        try {
          const response = await axios.post("/api/priority_preemptive", {
            n: processes.length,
            processes: processes,
          });
          setOutputProcessesState(JSON.parse(response.data.output));
        } catch (error) {
          console.log("error occured while running priority: ", error);
        }
      }
    }

    // priority_non_preemptive algorithm
    else if (algorithm === "priority_non_preemptive") {
      if (processes.length == 0) {
        alert("Please add processes");
      } else {
        currAlgorithm(algorithm);
        try {
          const response = await axios.post("/api/priority_non_preemptive", {
            n: processes.length,
            processes: processes,
          });
          setOutputProcessesState(JSON.parse(response.data.output));
        } catch (error) {
          console.log(
            "error occured while running priority non preemptive: ",
            error
          );
        }
      }
    }

    // round_robin
    else if (algorithm === "round_robin") {
      if (processes.length == 0) {
        alert("Please add processes");
      } else {
        currAlgorithm(algorithm);
        try {
          const response = await axios.post("/api/round_robin", {
            time_quantum : time_quantum,
            n: processes.length,
            processes: processes,
          });
          setOutputProcessesState(JSON.parse(response.data.output));
        } catch (error) {
          console.log("error occured while running round robin: ", error);
        }
      }
    }
  };

  return (
    <>
      <div className="grid grid-cols-12 h-screen">
        <div className="col-span-4">
          <div className="pl-5 pt-5 pb-5 bg-blue-50 border-b-2">
            <h1 className="lg:text-[22px] xl:text-[25px] font-bold">
              <span className="cpu_schedular">CPU</span> Scheduling Visualizer
            </h1>
          </div>
          <SelectAlgorithm />
          <ProcessInserter />
          <div className="p-5">
            <Button onClick={handleSubmit}>Submit</Button>
          </div>
          <InputProcessTable />
        </div>
        <div className="col-span-8 bg-slate-50">
          <OutputProcessTable />
          <br />
          <GanttChart />
        </div>
      </div>
    </>
  );
}
