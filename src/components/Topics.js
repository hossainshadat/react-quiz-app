import React from "react";
import { useLoaderData } from "react-router-dom";
import Questions from "./Questions";

function Topics() {
  const data = useLoaderData();
  const { name, questions } = data.data;

  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
          {name}
        </h2>
      </div>
      {questions.map((question) => (
        <Questions key={question.id} question={question} />
      ))}
    </div>
  );
}

export default Topics;
