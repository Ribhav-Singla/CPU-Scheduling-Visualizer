import { atom } from "recoil";

export const algorithmState = atom({
    key: "algorithmState",
    default: ""
})

export const timeQuantumState = atom({
    key: "timeQuantumState",
    default: 2
})

export const processesState = atom<number[][]>({
    key: "processesState",
    default: []
})