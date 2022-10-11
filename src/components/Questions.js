import React from "react";
import QuizCard from "./QuizCard";

function Questions({ questions }) {
  console.log(questions);
  return (
    <div>
      {questions.map((question) => {
        <h4 className="max-w-lg mb-6 font-sans text-2xl font-semibold leading-none tracking-tight text-gray-900 sm:text-2xl md:mx-auto">
          {question.question}
        </h4>;
      })}
      <div className="grid gap-3 row-gap-5 lg:grid-cols-2">
        <QuizCard />
      </div>
    </div>
  );
}

export default Questions;
