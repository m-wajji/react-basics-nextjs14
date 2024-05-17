import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

type Post = {
  //can also use interface, interface == type
  userId: number;
  id: number;
  title: string;
  body: string;
};

export default function Component4() {
  const [data, setData] = useState<Post | null>(null);

  const [PostId, setPostId] = useState(1);

  useEffect(() => {
    //data fetch from external source

    fetch(`https://jsonplaceholder.typicode.com/posts/${PostId}`)
      .then((res) => res.json()) //it get response from database, but it is not readable
      .then((data) => {
        setData(data);
      }) //to make it readable by converting to json
      .catch((error) => {
        console.log(error);
      });
  }, [PostId]);
  return (
    <div className="flex flex-col gap-5">
      <div className="w-[500px] flex flex-col gap-2 bg-slate-200 rounded-lg p-10 shadow-lg border-black/25">
        {data ? (
          <>
            <h1 className="font-bold text-xl border border-gray-400 items-center justify-center p-2">
              {data?.title}
            </h1>
            <h2>{data?.body}</h2>
          </>
        ) : (
          <>Loading.... </>
        )}
      </div>
      <div className="flex justify-between">
        <Button
          className={cn("", { invisible: PostId === 1 })}
          onClick={() => setPostId((prev) => prev - 1)}
        >
          Previous
        </Button>
        <Button onClick={() => setPostId((prev) => prev + 1)}>Next</Button>
      </div>
    </div>
  );
}
