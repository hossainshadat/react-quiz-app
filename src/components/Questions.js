import React from "react";
import QuizCard from "./QuizCard";

function Questions({ question }) {
  //   console.log(question);
  return (
    <div className="bg-purple-200 p-5 border rounded my-5 shadow-sm">
      <h4 className="max-w-lg mb-6 font-sans text-2xl font-semibold leading-none tracking-tight text-gray-900 sm:text-2xl md:mx-auto">
        {question.question}
      </h4>
      <div className="grid gap-3 row-gap-5 lg:grid-cols-2 ">
        {question.options.map((option) => (
          <QuizCard option={option} answer={question.correctAnswer} />
        ))}
      </div>
    </div>
  );
}

export default Questions;
