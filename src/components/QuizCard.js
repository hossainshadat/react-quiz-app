import React, { useState } from "react";
import { toast } from "react-toastify";

function QuizCard(props) {
  const [radio, setRadio] = useState(null);
  console.log(typeof radio);

  //   console.log(props);
  return (
    <div className=" bg-neutral-100 p-2 border rounded shadow-sm">
      <div className="flex items-center ">
        <input
          id={`default-radio-${props.option.length}`}
          type="radio"
          value={`${props.option}`}
          checked={radio === "radioA"}
          onChange={(e) => {
            setRadio(e.target.value);
          }}
          name="default-radio"
          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
        />
        <label
          htmlFor="default-radio-1"
          className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
        >
          {props.option}
        </label>
      </div>
    </div>
  );
}

export default QuizCard;
