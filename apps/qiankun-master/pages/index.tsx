// @ts-ignore
import { Link } from '@umijs/max';
// @ts-ignore

export default function HomePage() {
  return (
    <div>
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
