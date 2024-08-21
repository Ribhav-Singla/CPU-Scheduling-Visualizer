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
      <SelectAlgorithm />
      <ProcessInserter />
      <Button>Submit</Button>
      <InputProcessTable />
    </>
  );
}
