import React from "react";

function HomeCard({ data }) {
  const { id, name, logo, total } = data;
  return (
    <div className="flex bg-slate-300 flex-col justify-between p-5 border rounded shadow-sm">
      <img src={logo} />
      <div className="flex justify-between pt-3">
        <h6 className="mb-2 font-semibold leading-5">{name}</h6>
        <p className="mb-3 text-sm text-gray-900">
          Total Quiz : {name} {total}
        </p>
      </div>
      <button
        type="submit"
        className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-black transition duration-200 rounded shadow-md bg-blue-400  hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
      >
        Start Practice
      </button>
    </div>
  );
}

export default HomeCard;
