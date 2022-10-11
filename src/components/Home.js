import React from "react";
import { useLoaderData } from "react-router-dom";
import Hero from "./Hero";

function Home() {
  const data = useLoaderData();

  return (
    <div className="bg-zinc-300 ">
      <Hero data={data} />
    </div>
  );
}

export default Home;
