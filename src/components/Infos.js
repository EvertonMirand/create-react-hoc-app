import React from 'react';
import { withLoading } from '../hocs/withLoading';

function Infos() {
  return (
    <ul
      style={{
        clear: 'both',
        display: 'block',
        listStyle: 'none',
      }}
    >
      <li>
        <img
          alt="me"
          src="https://images.unsplash.com/photo-1534067783941-51c9c23ecefd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
          style={{
            margin: '0 auto',
            height: 500,
            width: 400,
          }}
        />
      </li>
      <li>My name: Everton Miranda Vitório</li>
      <li>My username: EvertonMirand</li>
      <li>My login: EvertonMirand</li>
    </ul>
  );
}

export default withLoading(Infos);
