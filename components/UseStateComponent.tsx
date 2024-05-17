"use client";

import React, { useState } from "react";
import { Button } from "./ui/button";

export default function UseStateComponent() {
  const [counter, setCounter] = useState(0);

  const increment = () => {
    setCounter(counter + 1);
  };

  const decrement = () => {
    if (counter < 1) return;
    setCounter(counter - 1);
  };

  return (
    <div className="text-3xl font-bold gap-5 flex justify-center items-center">
      <Button onClick={increment}>Barhao</Button>
      {counter}
      <Button variant={"destructive"} onClick={decrement}>
        Km kro
      </Button>
    </div>
  );
}
