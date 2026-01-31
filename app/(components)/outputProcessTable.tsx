"use client";
import React from "react";
import { currAlgorithmState } from "../(recoil)/store";
import { outputProcessesState } from "../(recoil)/store";
import { average_waiting_time } from "../(recoil)/store";
import { average_turnaround_time } from "../(recoil)/store";
import { useRecoilValue } from "recoil";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

function OutputProcessTable() {
  const currAlgorithm = useRecoilValue(currAlgorithmState);
  const processes = useRecoilValue(outputProcessesState);
  const averageTurnaroundTime = useRecoilValue(average_turnaround_time);
  const averageWaitingTime = useRecoilValue(average_waiting_time);

  return (
    // <div className="max-w-2xl lg:max-w-3xl xl:max-w-4xl pl-5 pt-5 pr-5 2xl:pr-0">
    <div className="pt-5 px-5">
      {processes.length === 0 ? (
        <div className="border border-gray-200 rounded-lg p-6 text-center">
          <div className="text-4xl mb-3">📋</div>
          <h3 className="font-semibold text-gray-800 mb-2">Process Results Table</h3>
          <p className="text-gray-600 text-sm max-w-md mx-auto">
            This table will display detailed scheduling results including completion time, turnaround time, 
            and waiting time for each process. These metrics help you understand how efficiently the 
            CPU handles different processes under the selected scheduling algorithm.
          </p>
          <div className="mt-4 p-3 bg-white rounded border border-gray-200 text-xs text-gray-500">
            <strong>Quick Reference:</strong><br/>
            Turnaround Time = Completion Time − Arrival Time<br/>
            Waiting Time = Turnaround Time − Burst Time
          </div>
        </div>
      ) : (
      <>
      <Table>
        <TableCaption>Output Process Table</TableCaption>
        <TableHeader className="bg-muted/50">
          <TableRow>
            <TableHead>Process ID</TableHead>
            <TableHead>Arrival Time</TableHead>
            <TableHead>Burst Time</TableHead>
            {currAlgorithm === "priority_preemptive" ||
            currAlgorithm === "priority_non_preemptive" ? (
              <TableHead>Priority</TableHead>
            ) : (
              ""
            )}
            <TableHead>Completion Time</TableHead>
            <TableHead>Turnaround Time</TableHead>
            <TableHead>Waiting Time</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {processes.map((process, index) => (
            <TableRow key={index}>
              <TableCell>{process.process_id}</TableCell>
              <TableCell>{process.arrival_time}</TableCell>
              <TableCell>{process.burst_time}</TableCell>
              {currAlgorithm === "priority_preemptive" ||
              currAlgorithm === "priority_non_preemptive" ? (
                //@ts-ignore
                <TableCell>{process.priority}</TableCell>
              ) : (
                ""
              )}
              <TableCell>{process.completion_time}</TableCell>
              <TableCell>{process.turnaround_time}</TableCell>
              <TableCell>{process.waiting_time}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <br />
      <div className="flex flex-col lg:flex-row justify-evenly items-center px-1 gap-y-2">
        <div>
          <p className="font-semibold">Average Turnaround Time: {averageTurnaroundTime}</p>
        </div>
        <div>
          <p className="font-semibold">Average Waiting Time: {averageWaitingTime}</p>
        </div>
      </div>
      </>
      )}
    </div>
  );
}

export default OutputProcessTable;
