import { MicroAppLink } from '@umijs/max';

export default function HomePage() {
  return (
    <MicroAppLink name="slave-app2" to="/hello">
      goto slave app2
    </MicroAppLink>
  );
}
