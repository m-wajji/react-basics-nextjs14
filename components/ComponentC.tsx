import React, { useState } from "react";
import { Button } from "./ui/button";

type ComponentBType = {
  counter: number;
  setCounter: React.Dispatch<React.SetStateAction<number>>;
};

export default function ComponentC({ counter, setCounter }: ComponentBType) {

  return (
    <div className="border border-black m-2 bg-gray-500 h-[75%] w-[75%] rounded-lg flex flex-col justify-center items-center">
      ComponentC
      <div className="flex gap-3 mt-2 items-center justify-center">
        <Button variant={'destructive'} onClick={() => setCounter((prev) => prev - 1)}>-</Button>
        {counter}
        <Button onClick={() => setCounter((prev) => prev + 1)}>+</Button>
      </div>
    </div>
  );
}
