"use client";
import React from "react";
import { algorithmState } from "../(recoil)/store";
import { processesState } from "../(recoil)/store";
import { useRecoilValue, useRecoilState } from "recoil";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

function InputProcessTable() {
  const algorithm = useRecoilValue(algorithmState);
  const [processes, setProcesses] = useRecoilState(processesState);

  const handleRemoveProcess = (index: number) => {
    setProcesses((prevProcesses) => [
      ...prevProcesses.slice(0, index),
      ...prevProcesses.slice(index + 1),
    ]);
  };

  return (
    // <div className="max-w-md 2xl:max-w-lg pl-5 pt-5 pr-5 2xl:pr-5">
    <div className="pt-5 px-5">
      <Table>
        <TableCaption>Input Process Table</TableCaption>
        <TableHeader className="bg-muted/50">
          <TableRow>
            <TableHead>Process ID</TableHead>
            <TableHead>Arrival Time</TableHead>
            <TableHead>Burst Time</TableHead>
            {algorithm === "priority_preemptive" ||
            algorithm === "priority_non_preemptive" ? (
              <TableHead>Priority</TableHead>
            ) : (
              ""
            )}
            <TableHead>Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {processes.map((process, index) => (
            <TableRow key={index}>
              <TableCell>{index}</TableCell>
              <TableCell>{process.arrival_time}</TableCell>
              <TableCell>{process.burst_time}</TableCell>
              {algorithm === "priority_preemptive" ||
              algorithm === "priority_non_preemptive" ? (
                //@ts-ignore
                <TableCell>{process.priority}</TableCell>
              ) : (
                ""
              )}
              <TableCell
                className="font-semibold cursor-pointer hover:text-red-500"
                onClick={() => handleRemoveProcess(index)}
              >
                {" "}
                Remove{" "}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

export default InputProcessTable;
