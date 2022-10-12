import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip } from "recharts";
import { useLoaderData } from "react-router-dom";

function Statistics() {
  const data = useLoaderData();

  return (
    <div className="px-4 py-16 flex justify-center items-center sm:max-w-xl md:max-w-full  md:px-24 lg:px-8 lg:py-20">
      <BarChart width={450} height={400} data={data.data}>
        <Bar dataKey="total" fill="#8884d8" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
      </BarChart>
    </div>
  );
}

export default Statistics;
