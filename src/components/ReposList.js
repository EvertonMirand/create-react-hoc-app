import React from 'react';
import { withLoading } from '../hocs/withLoading';

function ReposList() {
  return (
    <ul
      style={{
        clear: 'both',
        display: 'block',
        listStyle: 'none',
      }}
    >
      <li>Minha lista de repos:</li>
      <li>
        <a
          href="https://github.com/EvertonMirand/MeetApp"
          target="_blank"
          rel="noopener noreferrer"
        >
          MeetApp
        </a>
      </li>
      <li>
        <a
          href="https://github.com/EvertonMirand/modulo10"
          target="_blank"
          rel="noopener noreferrer"
        >
          modulo10
        </a>
      </li>
    </ul>
  );
}

export default withLoading(ReposList);
