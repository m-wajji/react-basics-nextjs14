
import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";

export default function Component1() {
  const [counter, setCounter] = useState(0);

  const increment = () => {
    setCounter(counter + 1);
  };

  const decrement = () => {
    if (counter < 1) return;
    setCounter(counter - 1);
  };

  useEffect(() => {
    console.log("Component 1 mounted");
  }, [counter]); //automatically called without being triggered, if dependency is empty then it will run once.
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
