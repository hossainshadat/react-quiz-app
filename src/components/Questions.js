import React, { useState } from "react";
import QuizCard from "./QuizCard";

function Questions({ question }) {
  const [show, setShow] = useState(false);
  console.log(show);
  return (
    <div className="bg-purple-200 p-5 border rounded my-5 shadow-sm">
      <div className="flex">
        <h4 className="max-w-lg mb-6 font-sans text-2xl font-semibold leading-none tracking-tight text-gray-900 sm:text-2xl md:mx-auto">
          {question.question}
        </h4>
        <div>
          <img
            onClick={() => setShow((prev) => !prev)}
            className="h-6 w-6 cursor-pointer"
            src="../view.png"
            alt="View"
          />
        </div>
      </div>
      <div className="grid gap-3 row-gap-5 lg:grid-cols-2 ">
        {question.options.map((option) => (
          <QuizCard option={option} answer={question} />
        ))}
      </div>
      {/* <h4 className="text-violet-500 max-w-lg mt-3 font-sans text-2xl font-semibold leading-none tracking-tight sm:text-2xl cursor-pointer hidden">
        Answer : {question.correctAnswer}
      </h4> */}
      {/* <h4
        className={`${
          show
            ? "text-violet-500 max-w-lg mt-3 font-sans text-2xl font-semibold leading-none tracking-tight sm:text-2xl cursor-pointer hidden"
            : "text-violet-500 max-w-lg mt-3 font-sans text-2xl font-semibold leading-none tracking-tight sm:text-2xl cursor-pointer"
        }`}
      >
        Answer : {question.correctAnswer}
      </h4> */}
      {show && (
        <h4 className="text-violet-500 max-w-lg mt-3 font-sans text-2xl font-semibold leading-none tracking-tight sm:text-2xl cursor-pointer">
          Answer : {question.correctAnswer}
        </h4>
      )}
    </div>
  );
}

export default Questions;
