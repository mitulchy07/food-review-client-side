import React from 'react';
import { Accordion } from 'react-bootstrap';

const Blogs = () => {
  return (
    <div className='my-5'>
      <Accordion defaultActiveKey='0'>
        <Accordion.Item eventKey='0'>
          <Accordion.Header>
            what are the difference between SQL and NoSQL?
          </Accordion.Header>
          <Accordion.Body>
            SQL databases are vertically scalable, while NoSQL databases are
            horizontally scalable. SQL databases are table-based, while NoSQL
            databases are document, key-value, graph, or wide-column stores. SQL
            databases are better for multi-row transactions, while NoSQL is
            better for unstructured data like documents or JSON.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey='0'>
          <Accordion.Header>
            What is JWT, and how does it work?
          </Accordion.Header>
          <Accordion.Body>
            JSON Web Token (JWT) is an open standard (RFC 7519) that defines a
            compact and self-contained way for securely transmitting information
            between parties as a JSON object. This information can be verified
            and trusted because it is digitally signed. <br />
            JWTs differ from other web tokens in that they contain a set of
            claims. Claims are used to transmit information between two parties.
            What these claims are depends on the use case at hand. For example,
            a claim may assert who issued the token, how long it is valid for,
            or what permissions the client has been granted.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey='0'>
          <Accordion.Header>
            What is the difference between javascript and NodeJS?
          </Accordion.Header>
          <Accordion.Body>
            JavaScript is a simple programming language that can be used with
            any browser that has the JavaScript Engine installed. <br /> On the
            other hand, Node.js is an interpreter or execution environment for
            the JavaScript programming language.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey='0'>
          <Accordion.Header>
            How does NodeJS handle multiple requests at the same time?
          </Accordion.Header>
          <Accordion.Body>
            NodeJS receives multiple client requests and places them into
            EventQueue. NodeJS is built with the concept of event-driven
            architecture. NodeJS has its own EventLoop which is an infinite loop
            that receives requests and processes them.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

export default Blogs;
