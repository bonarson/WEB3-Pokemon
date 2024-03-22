// pages/index.tsx
import Link from 'next/link';

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <ul>
        <li>
          <Link href="/server">
            <a>Server</a>
          </Link>
        </li>
        <li>
          <Link href="/client">
            <a>Client</a>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Home;
