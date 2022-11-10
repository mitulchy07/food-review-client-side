import React from 'react';
import Accordion from 'react-bootstrap/Accordion';

const Faq = () => {
  return (
    <div>
      <h1 className='text-center text-white fs-1'>FAQ</h1>
      <Accordion className='my-4' defaultActiveKey={['0']} alwaysOpen>
        <Accordion.Item eventKey='0'>
          <Accordion.Header>Why is this site for?</Accordion.Header>
          <Accordion.Body>
            You can find idea about some uncommon food here. Also you will know
            the details about them. Being experienced in many training projects
            means they understand what is needed to deliver a successful end to
            end training programme from the initial.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey='1'>
          <Accordion.Header>Why is this site necessary?</Accordion.Header>
          <Accordion.Body>
            Being experienced in many training projects means they understand
            what is needed to deliver a successful end to end training programme
            from the initial Training Needs Analysis (TNA) and assessment of
            where an employee workforce is with their knowledge levels and
            skillset through content and materials design and development right
            through to Delivery and post training assessment and support.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey='2'>
          <Accordion.Header>
            How I will be benifited from here?
          </Accordion.Header>
          <Accordion.Body>
            One where you love what you do? One that’s in-demand and pays well?
            One where you can make a difference in life? For many, an IT career
            checks all of those boxes and more. If you’re just planning for the
            future or considering changing your current career, you’ll find that
            an IT career is an exciting option. Here are a few reasons IT may be
            your ideal career.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

export default Faq;
