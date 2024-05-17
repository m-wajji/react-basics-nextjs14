import React from "react";
import ComponentC from "./ComponentC";

type ComponentBType = {
  counter: number;
  setCounter: React.Dispatch<React.SetStateAction<number>>;
};

export default function ComponentB({ counter, setCounter }: ComponentBType) {
  return (
    <div className="border border-black m-2 bg-orange-500 h-[75%] w-[75%] rounded-lg flex flex-col justify-center items-center">
      ComponentB
      <ComponentC counter={counter} setCounter={setCounter} />
    </div>
  );
}
