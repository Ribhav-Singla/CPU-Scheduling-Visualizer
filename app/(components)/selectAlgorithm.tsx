"use client";
import React from "react";
import { algorithmState } from "../(recoil)/store";
import { timeQuantumState } from "../(recoil)/store";
import { processesState } from "../(recoil)/store";
import { useSetRecoilState, useResetRecoilState } from "recoil";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

function SelectAlgorithm() {
  const setAlgorithm = useSetRecoilState(algorithmState);
  const resetTimeQuantum = useResetRecoilState(timeQuantumState);
  const resetProcesses = useResetRecoilState(processesState);

  const handleSelectChange = (value:string) => {
    setAlgorithm(value);
    resetTimeQuantum();
    resetProcesses();
  };

  return (
    <div>
      <p>CPU Algorithm</p>
      <Select onValueChange={handleSelectChange}>
        <SelectTrigger className="w-[280px]">
          <SelectValue placeholder="Select an algorithm" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="fcfs">First Come First Serve</SelectItem>
          <SelectItem value="sjf_preemptive">
            Shortest Job First(SJF) Preemptive
          </SelectItem>
          <SelectItem value="sjf_non_preemptive">
            Shortest Job First(SJF) Non Preemptive
          </SelectItem>
          <SelectItem value="priority_preemptive">
            Priority Scheduling Preemptive
          </SelectItem>
          <SelectItem value="priority_non_preemptive">
            Priority Scheduling Non Preemptive
          </SelectItem>
          <SelectItem value="mlq">Multi level Queue</SelectItem>
          <SelectItem value="mlfq">Multi level Feedback Queue</SelectItem>
          <SelectItem value="rr">Round Robin</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}

export default SelectAlgorithm;
