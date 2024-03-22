import React from 'react';
// pages/index.tsx
import Link from 'next/link';

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <ul>
        <li>
          <Link href="/server">
            <span>Server</span>
          </Link>
        </li>
        <li>
          <Link href="/client">
            <span>Client</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Home;
