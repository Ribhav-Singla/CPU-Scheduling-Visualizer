import { atom } from "recoil";

type Process = {
    arrival_time: number,
    burst_time: number,
    priority: number
} | {
    arrival_time: number,
    burst_time: number
}

type outputProcess = {
    process_id: number,
    arrival_time: number,
    burst_time: number,
    waiting_time: number,
    turnaround_time: number,
    completion_time: number,
} | {
    process_id: number,
    arrival_time: number,
    burst_time: number,
    waiting_time: number,
    turnaround_time: number,
    completion_time: number,
    priority: number
}

export const algorithmState = atom({
    key: "algorithmState",
    default: ""
})

export const currAlgorithmState = atom({
    key: "currAlgorithmState",
    default: ""
})

export const timeQuantumState = atom({
    key: "timeQuantumState",
    default: 2
})

export const processesState = atom<Process[]>({
    key: "processesState",
    default: []
})

export const outputProcessesState = atom<outputProcess[]>({
    key: "outputProcessesState",
    default: []
})

export const ganntChart_processState = atom({
    key: "ganntChart_processState",
    default: []
})

export const ganntChart_startTimeState = atom({
    key: "ganntChart_startTimeState",
    default: []
})