import React, { useEffect, useState } from "react";

type Post = {
  //can also use interface, interface == type
  userId: number;
  id: number;
  title: string;
  body: string;
};

export default function Component3() {
  const [data, setData] = useState<Post[] | null>(null);

  useEffect(() => {
    //data fetch from external source

    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json()) //it get response from database, but it is not readable
      .then((data) => {
        setData(data);
      }) //to make it readable by converting to json
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div>
      {
        <ul>
          {data?.map((item) => (
            <li key={item.id}>{item.title}</li>
          ))}
        </ul>
      }
    </div>
  );
}
