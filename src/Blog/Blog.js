import React from 'react';
import useTitel from '../hooks/useTitle';

const Blog = () => {
  useTitel('BLOG');
  return (
    <div>
      <h1>This is blog</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione tempora
        inventore ullam quia quis deserunt ad eos voluptatum odio doloribus.
        Voluptates ullam impedit praesentium in id ipsa dolorum suscipit alias.
      </p>
    </div>
  );
};

export default Blog;
