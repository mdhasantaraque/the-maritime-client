import React from "react";

const Blog = () => {
  return (
    <div>
      <div className="bg-base-200 py-10">
        <div className="container max-w-4xl px-10 py-6 mx-auto rounded-lg shadow-sm dark:bg-indigo-400">
          <div className="mt-3">
            <p className="text-2xl font-bold hover:underline">
              No.1- What is cors?
            </p>
            <p className="mt-2">
              Cross-Origin Resource Sharing (CORS) is an HTTP-based security
              mechanism controlled and enforced by the client (web browser). It
              allows a service (API) to indicate any origin other than its own
              from which the client can request resources. It has been designed
              in response to the same-origin policy (SOP) that restricts how a
              website (HTML document or JS script) loaded by one origin can
              interact with a resource from another origin. CORS is used to
              explicitly allow some cross-origin requests while rejecting
              others. <br />
              CORS is implemented primarily in web browsers, but it can also be
              used in API clients as an option. It's present in all popular web
              browsers like Google Chrome, Firefox, Opera, and Safari. The
              standard has been accepted as a W3C Recommendation in January
              2014.
            </p>
          </div>
        </div>
        <div className="container max-w-4xl px-10 py-6 mx-auto my-5 rounded-lg shadow-sm dark:bg-indigo-400">
          <div className="mt-3">
            <p className="text-2xl font-bold hover:underline">
              No.2- Why are you using firebase? What other options do you have
              to implement authentication?
            </p>
            <p className="mt-2">
              The use of Firebase in building mobile and web applications is
              common nowadays. According to StackShare, around 2216 companies
              are using this backend as a service (BaaS) platform. Undoubtedly,
              developers rely on this platform because of extensive tools, fast
              development, and real-time databases to make interactive apps.
              <br />
              In simple words, Firebase is a software development platform that
              helps in building web and mobile applications with its 18
              services. These 18 services of this BaaS solution also include
              purposeful APIs and four beta products. In addition, it is
              compatible to integrate with Android, web, iOS, and Unity setups.
              Few most popular service are given below:
              <br />
              1. Reliable & Extensive Databases <br />
              2. Fast & Safe Hosting <br />
              3. Google Analytics <br />
              4. Firebase Cloud Messaging for Cross-Platform <br />
              5. Free Multi-Platform Firebase Authentication <br />
              6. Firebase Testing Services to Improve App Quality <br />
              7. Machine Learning Capabilities... etc
            </p>
            <p>
              Alternatives to Firebase Authentication: <br />
              1. Auth0 <br />
              2. Okta
              <br />
              3. MangoDB <br />
              4. Passport <br />
              5. JSON Web Token <br />
              6. Keycloak <br />
              7. Amazone Cognito... etc
            </p>
          </div>
        </div>
        <div className="container max-w-4xl px-10 py-6 mx-auto my-5 rounded-lg shadow-sm dark:bg-indigo-400">
          <div className="mt-3">
            <p className="text-2xl font-bold hover:underline">
              No.3- How does the private route work?
            </p>
            <p className="mt-2">
              <ul>
                <li>
                  The private component is used to protect selected pages in a
                  React act from unauthenticated users.
                </li>
                <li>
                  The {`<PrivateRoute/>`} component will check the current user
                  state from the user, destructured from useContext hook.
                </li>
                <li>
                  The private route component renders child components
                  (children) if the user is logged in. If not logged in the user
                  redirected to the/login page with the return url passed in
                  Navigate component.
                </li>
              </ul>
            </p>
          </div>
        </div>
        <div className="container max-w-4xl px-10 py-6 mx-auto my-5 rounded-lg shadow-sm dark:bg-indigo-400">
          <div className="mt-3">
            <p className="text-2xl font-bold hover:underline">
              No.4- What is Node? How does Node work?
            </p>
            <p className="mt-2">
              Node.js is a multiplayer cross-platform runtime environment and an
              open-source platform that can be used to execute the JavaScript
              driver code of the browser. Most people are respected and
              understand that it is a brand or a programming language. Almost
              person Node.js for creating back-end services like API, web
              applications, or mobile applications. Node.js is a technology that
              can be used to build a back-end, which is used to use JavaScript.
              Google Chrome's V8 JavaScript engine powers Node.js. Node.js is an
              efficient and light-weighted technology because it is used as an
              event-driven and non-blocking I/O model. Developers use this
              framework for hosting the APIs, which serve the HTTP requests and
              access the database equally.
              <br />
              Working of Node.js: Node.js accepts the request from the clients
              and sends the response, while working with the request node.js
              handles them with a single thread. To operate I/O operations or
              requests node.js use the concept of threads. Thread is a sequence
              of instructions that the server needs to perform. It runs parallel
              on the server to provide the information to multiple clients.
              Node.js is an event loop single-threaded language. It can handle
              concurrent requests with a single thread without blocking it for
              one request.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
