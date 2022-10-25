import React from "react";

const Blog = () => {
  return (
    <div>
      <div className="dark:bg-gray-800 py-10 dark:text-gray-100">
        <div className="container max-w-4xl px-10 py-6 mx-auto rounded-lg shadow-sm dark:bg-gray-900">
          <div className="mt-3">
            <p className="text-2xl font-bold hover:underline">
              No.1- What is the purpose of react router?
            </p>
            <p className="mt-2">
              Routing is a process in which a user is directed to different
              pages based on their action or request. ReactJS Router is mainly
              used for developing Single Page Web Applications. React Router is
              used to define multiple routes in the application. When a user
              types a specific URL into the browser, and if this URL path
              matches any 'route' inside the router file, the user will be
              redirected to that particular route. <br />
              React Router is a standard library system built on top of the
              React and used to create routing in the React application using
              React Router Package. It provides the synchronous URL on the
              browser with data that will be displayed on the web page. It
              maintains the standard structure and behavior of the application
              and mainly used for developing single page web applications.
            </p>
          </div>
        </div>
        <div className="container max-w-4xl px-10 py-6 mx-auto my-5 rounded-lg shadow-sm dark:bg-gray-900">
          <div className="mt-3">
            <p className="text-2xl font-bold hover:underline">
              No.2- How does context API work?
            </p>
            <p className="mt-2">
              The React Context API is a way for a React app to effectively
              produce global variables that can be passed around. This is the
              alternative to "prop drilling" or moving props from grandparent to
              child to parent, and so on. Context is also touted as an easier,
              lighter approach to state management using Redux. <br />
              React.createContext() is all you need. It returns a consumer and a
              provider. Provider is a component that as it's names suggests
              provides the state to its children. It will hold the "store" and
              be the parent of all the components that might need that store.
              Consumer as it so happens is a component that consumes and uses
              the stat
            </p>
          </div>
        </div>
        <div className="container max-w-4xl px-10 py-6 mx-auto my-5 rounded-lg shadow-sm dark:bg-gray-900">
          <div className="mt-3">
            <p className="text-2xl font-bold hover:underline">
              No.3- Explain of useRef hook?
            </p>
            <p className="mt-2">
              React provides a bunch of hooks that allow you to add features to
              your components. One of the most common use cases of the hook
              useRef in React is to reference a DOM element. These hooks make it
              easier to encapsulate stateful behavior and side effects in your
              functional components in order to increase readability and to use
              less code.
              <br />
              The hook useRef() in React returns an object that has a property
              current that we can access as we do with objects. This property is
              initialized to the passed argument in the function useRef() . The
              returned object will persist for the full lifetime of the
              component.
              <br />
              It is very similar to useState , but it doesn't cause a component
              to re-render when changed. To make things more clear.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
