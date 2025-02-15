import {
  casdoorEndpoint,
  clientId,
  organizationName,
  redirectUri,
} from '@/constant';
import { Link } from '@umijs/max';
import { useState } from 'react';

const LoginButton = () => {
  const handleLogin = () => {
    const authUrl = `${casdoorEndpoint}/login/oauth/authorize?client_id=${clientId}&response_type=code&redirect_uri=${redirectUri}&scope=openid+profile+email&state=STATE&organization=${organizationName}`;
    window.location.href = authUrl;
  };

  return <button onClick={handleLogin}>Login with Google</button>;
};

const getUser = () => {
  const userInfo = localStorage.getItem('user');
  return userInfo ? JSON.parse(userInfo) : null;
};

export default function HomePage() {
  const [count, setCount] = useState(0);
  const userInfo = getUser();
  const fullName = userInfo?.name;
  return (
    <div style={{ textAlign: 'center', padding: '100px 0' }}>
      {fullName ? (
        <>
          <img src={userInfo?.picture} />
          <span
            style={{ marginLeft: '10px', fontSize: '20px', fontWeight: 'bold' }}
          >
            {fullName}
          </span>
          <button
            onClick={() => {
              setCount(count + 1);
              localStorage.removeItem('user');
            }}
            style={{ marginLeft: '10px', color: 'red' }}
          >
            Logout
          </button>
        </>
      ) : (
        <LoginButton />
      )}
      <hr />
      <h2>Qiankun Master Page</h2>

      <div>
        <Link to="/slave/home" state={{ from: 'master' }}>
          <button>go-slave</button>
        </Link>
        <Link to="/nav">
          <button>go-match-slave</button>
        </Link>
      </div>
    </div>
  );
}
