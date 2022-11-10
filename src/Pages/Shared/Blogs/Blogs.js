import React from 'react';
import { Accordion } from 'react-bootstrap';

const Blogs = () => {
  return (
    <div className='my-5'>
      <Accordion defaultActiveKey='0'>
        <Accordion.Item eventKey='0'>
          <Accordion.Header>what is cors?</Accordion.Header>
          <Accordion.Body>
            Cross-Origin Resource Sharing (CORS) is an HTTP-header based
            mechanism that allows a server to indicate any origins (domain,
            scheme, or port) other than its own from which a browser should
            permit loading resources. CORS also relies on a mechanism by which
            browsers make a "preflight" request to the server hosting the
            cross-origin resource, in order to check that the server will permit
            the actual request. In that preflight, the browser sends headers
            that indicate the HTTP method and headers that will be used in the
            actual request.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey='0'>
          <Accordion.Header>
            Why are you using firebase? What other options do you have to
            implement authentication?
          </Accordion.Header>
          <Accordion.Body>
            Google Firebase offers many features that pitch it as the go-to
            backend development tool for web and mobile apps. It reduces
            development workload and time. And it's a perfect prototyping tool.
            Firebase is simple, lightweight, friendly, and industrially
            recognized. <br />
            There some alternative tools for firebase: <br />
            Back4App, Back4app is an open-source, relational, low-code backend
            platform, Backendless, Kuzzle, Pubnub, Kumulos, Appwrite, Deployd.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey='0'>
          <Accordion.Header>How does the private route work?</Accordion.Header>
          <Accordion.Body>
            The react private route component renders a route component if the
            user is logged in and in an authorised role for the route, if the
            user isn’t logged in they’re redirected to the /login page, if the
            user is logged in but aren’t in an authorised role they’re
            redirected to the home page.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey='0'>
          <Accordion.Header>What is Node? How does Node work?</Accordion.Header>
          <Accordion.Body>
            Node.js is a JavaScript runtime environment that achieves low
            latency and high throughput by taking a “non-blocking” approach to
            serving requests. In other words, Node.js wastes no time or
            resources on waiting for I/O requests to return.While spawning
            threads incurs less memory and CPU overhead than forking processes,
            it can still be inefficient. The presence of a large number of
            threads can cause a heavily loaded system to spend precious cycles
            on thread scheduling and context switching, which adds latency and
            imposes limits on scalability and throughput. [ Also on InfoWorld:
            Reactive JavaScript: The evolution of front-end architecture ]
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

export default Blogs;
