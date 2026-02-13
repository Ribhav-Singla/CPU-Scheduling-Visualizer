"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useSetRecoilState } from "recoil";
import {
  algorithmState,
  processesState,
  timeQuantumState,
} from "../(recoil)/store";
import { motion, AnimatePresence } from "framer-motion";
import { Badge } from "@/components/ui/badge";

interface PresetExample {
  id: string;
  name: string;
  description: string;
  algorithm: string;
  timeQuantum?: number;
  processes: Array<{
    arrival_time: number;
    burst_time: number;
    priority?: number;
  }>;
}

const presetExamples: PresetExample[] = [
  {
    id: "fcfs_basic",
    name: "Basic FCFS Demo",
    description:
      "3 processes arriving at different times. A simple example to understand First-Come, First-Served scheduling order and metric calculations.",
    algorithm: "fcfs",
    processes: [
      { arrival_time: 0, burst_time: 4 },
      { arrival_time: 1, burst_time: 3 },
      { arrival_time: 2, burst_time: 1 },
    ],
  },
  {
    id: "fcfs_convoy",
    name: "Convoy Effect (FCFS)",
    description:
      "A long process (burst=20) arrives first, followed by several short processes. All short processes must wait, resulting in high average waiting time — the classic convoy effect.",
    algorithm: "fcfs",
    processes: [
      { arrival_time: 0, burst_time: 20 },
      { arrival_time: 1, burst_time: 3 },
      { arrival_time: 2, burst_time: 2 },
      { arrival_time: 3, burst_time: 1 },
      { arrival_time: 4, burst_time: 2 },
    ],
  },
  {
    id: "priority_starvation",
    name: "Starvation (Priority)",
    description:
      "P0 has the lowest priority (5) while other processes keep arriving with higher priority. P0 gets starved and finishes last despite arriving first. Demonstrates why aging is needed.",
    algorithm: "priority_preemptive",
    processes: [
      { arrival_time: 0, burst_time: 10, priority: 5 },
      { arrival_time: 1, burst_time: 2, priority: 1 },
      { arrival_time: 3, burst_time: 3, priority: 2 },
      { arrival_time: 5, burst_time: 1, priority: 1 },
      { arrival_time: 7, burst_time: 4, priority: 3 },
    ],
  },
  {
    id: "rr_quantum_small",
    name: "Round Robin — Small Quantum",
    description:
      "Time quantum = 1 causes frequent context switches. Compare with the large quantum example to see how quantum size affects waiting time and turnaround time.",
    algorithm: "round_robin",
    timeQuantum: 1,
    processes: [
      { arrival_time: 0, burst_time: 5 },
      { arrival_time: 0, burst_time: 3 },
      { arrival_time: 0, burst_time: 8 },
      { arrival_time: 0, burst_time: 2 },
    ],
  },
  {
    id: "rr_quantum_large",
    name: "Round Robin — Large Quantum",
    description:
      "Time quantum = 10 (larger than all burst times). Round Robin degrades to FCFS since every process finishes within a single quantum. Compare with the small quantum example.",
    algorithm: "round_robin",
    timeQuantum: 10,
    processes: [
      { arrival_time: 0, burst_time: 5 },
      { arrival_time: 0, burst_time: 3 },
      { arrival_time: 0, burst_time: 8 },
      { arrival_time: 0, burst_time: 2 },
    ],
  },
  {
    id: "sjf_optimal",
    name: "SJF Optimal Waiting Time",
    description:
      "All processes arrive at time 0 with varying burst times. SJF Non-Preemptive produces the optimal (minimum) average waiting time for non-preemptive algorithms.",
    algorithm: "sjf_non_preemptive",
    processes: [
      { arrival_time: 0, burst_time: 6 },
      { arrival_time: 0, burst_time: 2 },
      { arrival_time: 0, burst_time: 8 },
      { arrival_time: 0, burst_time: 3 },
      { arrival_time: 0, burst_time: 1 },
    ],
  },
];

export default function PresetExamples() {
  const setAlgorithm = useSetRecoilState(algorithmState);
  const setProcesses = useSetRecoilState(processesState);
  const setTimeQuantum = useSetRecoilState(timeQuantumState);
  const [selectedPreset, setSelectedPreset] = useState<string>("");
  const [showDescription, setShowDescription] = useState(false);

  const handlePresetSelect = (presetId: string) => {
    setSelectedPreset(presetId);
    setShowDescription(true);
  };

  const handleLoadPreset = () => {
    const preset = presetExamples.find((p) => p.id === selectedPreset);
    if (!preset) {
      alert("Please select a preset example first");
      return;
    }

    setAlgorithm(preset.algorithm);
    if (preset.timeQuantum) {
      setTimeQuantum(preset.timeQuantum);
    } else {
      setTimeQuantum(2);
    }
    setProcesses(preset.processes);
    setShowDescription(false);
  };

  const selectedExample = presetExamples.find((p) => p.id === selectedPreset);

  return (
    <div className="pl-5 pr-5 pt-4 pb-2">
      <div className="border border-border rounded-lg p-4 bg-muted/30">
        <p className="font-semibold text-sm mb-2 flex items-center gap-2">
          Load Example
          <Badge
            className="border-0 text-white text-[10px] px-2 py-0"
            style={{ background: 'linear-gradient(to right, #12acee, #5df488)' }}
          >
            New
          </Badge>
        </p>
        <div className="flex flex-col gap-3">
          <Select onValueChange={handlePresetSelect} value={selectedPreset}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Choose a preset scenario..." />
            </SelectTrigger>
            <SelectContent>
              {presetExamples.map((preset) => (
                <SelectItem key={preset.id} value={preset.id}>
                  {preset.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <AnimatePresence>
            {showDescription && selectedExample && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.2 }}
                className="overflow-hidden"
              >
                <div className="text-xs text-muted-foreground bg-background rounded-md p-3 border border-border">
                  <p className="mb-1">
                    <strong>Algorithm:</strong>{" "}
                    {selectedExample.algorithm.replace(/_/g, " ").replace(/\b\w/g, (c) => c.toUpperCase())}
                    {selectedExample.timeQuantum && ` (TQ=${selectedExample.timeQuantum})`}
                  </p>
                  <p className="mb-1">
                    <strong>Processes:</strong> {selectedExample.processes.length}
                  </p>
                  <p>{selectedExample.description}</p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <Button
            onClick={handleLoadPreset}
            size="sm"
            className="w-full"
            disabled={!selectedPreset}
          >
            Load Example
          </Button>
        </div>
      </div>
    </div>
  );
}
