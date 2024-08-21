"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input"
import { algorithmState } from "../(recoil)/store";
import { timeQuantumState } from "../(recoil)/store";
import { processesState } from "../(recoil)/store";
import { useRecoilValue, useSetRecoilState ,useRecoilState } from "recoil";

function ProcessInserter() {
  const algorithm = useRecoilValue(algorithmState);
  const setProccesses = useSetRecoilState(processesState);
  const [timeQuantum,setTimeQuantum] = useRecoilState(timeQuantumState);

  const [arrivalTime,setArrivalTime] = useState(-1);
  const [burstTime,setBurstTime] = useState(-1);
  const [priority,setPriority] = useState(-1);

  const handleAddProcess = ()=>{
    if(!algorithm){
      alert("Select an algorithm");
    }
    else if(algorithm === 'priority_preemptive' || algorithm === 'priority_non_preemptive'){
      if((arrivalTime!=-1 && burstTime!=-1 && priority!=-1)){
        setProccesses((prev)=>{
          return [...prev, [arrivalTime,burstTime,priority]];
        })
        setArrivalTime(-1);
        setBurstTime(-1);
        setPriority(-1);
      }else{
        alert("Please fill all fields");
      }
    }
    else{
      if(arrivalTime!=-1 && burstTime!=-1){
        setProccesses((prev)=>{
          return [...prev, [arrivalTime,burstTime]]
        })
        setArrivalTime(-1);
        setBurstTime(-1);
      }else{
        alert("Please fill all fields");
      }
    }
  }

  return <div>
    <div className="process_inserter_container pl-5 pt-5">

      <div className="arrival_burst_time_container">
        <div>
          <label htmlFor="arrival time" className="font-semibold">Arrival Time</label>
          <Input type="number" placeholder="AT" className="max-w-24" value={arrivalTime == -1 ? '' : arrivalTime} onChange={(e)=>setArrivalTime(Number(e.target.value))}/>
        </div>
        <div>
          <label htmlFor="burst time" className="font-semibold">Burst Time</label>
          <Input type="number" placeholder="BT" className="max-w-24" value={burstTime == -1 ? '' : burstTime} onChange={(e)=>setBurstTime(Number(e.target.value))} />
        </div>
      </div>

      <div className="priority_container">
        { algorithm === 'priority_preemptive' || algorithm === 'priority_non_preemptive' ?
          <div>
            <label htmlFor="priority" className="font-semibold">Priority</label>
            <Input type="number" placeholder="Priority" className="max-w-24 " value={priority == -1 ? '' : priority} onChange={(e)=>setPriority(Number(e.target.value))} />
          </div>
          : ''
        }
      </div>

      <div className="add_process_container">
        <Button className="add_process_btn" onClick={handleAddProcess}>Add</Button>
      </div>
      
    </div>
    { algorithm === 'rr' ?
      <div className="pl-5 pt-5">
        <label htmlFor="time_quantum" className="font-semibold">Time Quantum</label>
        <Input type="number" placeholder="TQ" className="max-w-28" value={timeQuantum} onChange={(e)=>setTimeQuantum(Number(e.target.value))}/>
      </div>
      : ''
    }
  </div>
}

export default ProcessInserter;
