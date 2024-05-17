import React, { useState } from "react";
import ComponentB from "./ComponentB";
import { Button } from "./ui/button";

export default function ComponentA() {
  const [counter, setCounter] = useState(0);

  const increment = () => {
    setCounter((prev) => prev + 1);
  };

  const decrement = () => {
    if (counter < 1) return;
    setCounter((prev) => prev - 1);
  };

  return (
    <div className="border border-black bg-green-400 h-[75%] w-[75%] rounded-lg flex flex-col items-center justify-center">
      ComponentA
      <div className="flex gap-3 mt-2 items-center justify-center">
        <Button variant={"destructive"} onClick={decrement}>
          -
        </Button>
        {counter}
        <Button onClick={increment}>+</Button>
      </div>
      <ComponentB counter={counter} setCounter={setCounter} />
    </div>
  );
}
