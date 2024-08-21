"use client";
import React from "react";
import { Button } from "@/components/ui/button";
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
    <div className="max-w-md">
      <Table>
        <TableCaption>Input Process Table</TableCaption>
        <TableHeader className="bg-muted/50">
          <TableRow>
            <TableHead>Arrival Time</TableHead>
            <TableHead>Burst Time</TableHead>
            {algorithm === "priority_preemptive" ||
            algorithm === "priority_non_preemptive" ||
            (processes && processes[0] && processes[0].length > 2) ? (
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
              {process.map((value, subIndex) => (
                <TableCell key={subIndex}>{value}</TableCell>
              ))}
              <TableCell>
                <Button onClick={() => handleRemoveProcess(index)}>-</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

export default InputProcessTable;
