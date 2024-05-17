
import React, { useEffect } from "react";

export default function Component2() {
  useEffect(() => {
    console.log("Component 2 mounted");
  }, []); //automatically called without being triggered, if dependency is empty then it will run once.
  return <div>Component2</div>;
}
