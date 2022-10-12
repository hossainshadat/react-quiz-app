import React, { useState } from "react";

const Item = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b">
      <button
        type="button"
        aria-label="Open item"
        title="Open item"
        className="flex items-center justify-between w-full p-4 focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <p className="text-lg font-medium">{title}</p>
        <svg
          viewBox="0 0 24 24"
          className={`w-3 text-gray-600 transform transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        >
          <polyline
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeMiterlimit="10"
            points="2,7 12,17 22,7"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      {isOpen && (
        <div className="p-4 pt-0">
          <p className="text-gray-700">{children}</p>
        </div>
      )}
    </div>
  );
};

export const Blog = () => {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 bg-zinc-100 ">
      <div className="max-w-xl sm:mx-auto lg:max-w-2xl">
        <div className="space-y-4">
          <Item title="What is the purpose of React Router?">
            Routing is a process in which a user is directed to different pages
            based on their action or request. ReactJS Router is mainly used for
            developing Single Page Web Applications. React Router is used to
            define multiple routes in the application. When a user types a
            specific URL into the browser, and if this URL path matches any
            'route' inside the router file, the user will be redirected to that
            particular route. React Router is a standard library system built on
            top of the React and used to create routing in the React application
            using React Router Package. It provides the synchronous URL on the
            browser with data that will be displayed on the web page. It
            maintains the standard structure and behavior of the application and
            mainly used for developing single page web applications.
          </Item>
          <Item title="How does context API work?">
            One of the concepts of React is to break your application into
            components, for reusability purposes. So in a simple React
            application, we have a few different components. As our application
            grows, these components can become huge and unmaintainable, so we
            break them into smaller components. That’s one of the best concepts
            about React—you can create a bunch of components and have a fully
            maintainable and concise application, without having to create a
            super huge component to deal with your whole application. After
            breaking components into smaller components for maintainability
            purposes, these small components might now need some data to work
            properly. If these small components need data to work with, you will
            have to pass data through props from the parent component to the
            child component. This is where we can slow down our application and
            cause development issues.
          </Item>
          <Item title="useRef() hook React?">
            useRef() hook creates references. Calling const reference =
            useRef(initialValue) with the initial value returns a special object
            named reference. The reference object has a property current: you
            can use this property to read the reference value reference.current,
            or update reference.current = newValue. Between the component
            re-renderings, the value of the reference is persistent. Updating a
            reference, contrary to updating state, doesn't trigger component
            re-rendering. References can also access DOM elements. Assign the
            reference to ref attribute of the element you'd like to access:{" "}
          </Item>
        </div>
      </div>
    </div>
  );
};

export default Blog;
