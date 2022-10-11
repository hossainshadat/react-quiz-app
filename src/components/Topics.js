import React from "react";
import { useLoaderData } from "react-router-dom";

function Topics() {
  const data = useLoaderData();
  const { total, id, name, questions } = data.data;
  // console.log(data.data);

  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
          {name}
        </h2>
      </div>
      <div className="bg-purple-200 p-5 border rounded shadow-sm">
        <h4 className="max-w-lg mb-6 font-sans text-2xl font-semibold leading-none tracking-tight text-gray-900 sm:text-2xl md:mx-auto">
          quick, brown fox jumps over a lazy dog
        </h4>
        <div className="grid gap-3 row-gap-5 lg:grid-cols-2">
          <div className=" bg-neutral-100 p-2 border rounded shadow-sm">
            <div className="flex items-center ">
              <input
                id="default-radio-1"
                type="radio"
                value=""
                name="default-radio"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                htmlFor="default-radio-1"
                className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                A flower in my garden, a mystery in my panties. Heart attack
                never stopped old Big Bear. I didn't even know we were calling
                him Big Bear. We never had the chance to.
              </label>
            </div>
          </div>

          <div className=" bg-neutral-100 p-2 border rounded shadow-sm">
            <div className="flex items-center ">
              <input
                id="default-radio-2"
                type="radio"
                value=""
                name="default-radio"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                htmlFor="default-radio-2"
                className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                A flower in my garden, a mystery in my panties. Heart attack
                never stopped old Big Bear. I didn't even know we were calling
                him Big Bear. We never had the chance to.
              </label>
            </div>
          </div>
          <div className=" bg-neutral-100 p-2 border rounded shadow-sm">
            <div className="flex items-center ">
              <input
                id="default-radio-3"
                type="radio"
                value=""
                name="default-radio"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                htmlFor="default-radio-3"
                className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                A flower in my garden, a mystery in my panties. Heart attack
                never stopped old Big Bear. I didn't even know we were calling
                him Big Bear. We never had the chance to.
              </label>
            </div>
          </div>
          <div className=" bg-neutral-100 p-2 border rounded shadow-sm">
            <div className="flex items-center ">
              <input
                id="default-radio-4"
                type="radio"
                value=""
                name="default-radio"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                htmlFor="default-radio-4"
                className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                A flower in my garden, a mystery in my panties. Heart attack
                never stopped old Big Bear. I didn't even know we were calling
                him Big Bear. We never had the chance to.
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Topics;
