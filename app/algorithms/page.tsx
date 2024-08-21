"use client";
import { Button } from "@/components/ui/button";
import SelectAlgorithm from "../(components)/selectAlgorithm";
import ProcessInserter from "../(components)/processInserter";
import InputProcessTable from "../(components)/inputProcessTable";
import { algorithmState } from "../(recoil)/store";
import { useRecoilValue } from "recoil";

export default function () {
  const algorithm = useRecoilValue(algorithmState);

  return (
    <>
      <div className="grid grid-cols-12 h-screen">
        <div className="col-span-4">
          <div className="pl-5 pt-5 pb-5 bg-blue-50 border-b-2">
            <h1 className="lg:text-[22px] xl:text-[25px] font-bold"><span className="cpu_schedular">CPU</span> Scheduling Visualizer</h1>
          </div>
          <SelectAlgorithm />
          <ProcessInserter />
          <div className="p-5">
            <Button>Submit</Button>
          </div>
          <InputProcessTable />
        </div>
        <div className="col-span-8 bg-slate-50">
          <h2>output</h2>
        </div>
      </div>
    </>
  );
}
