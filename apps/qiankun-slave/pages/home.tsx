import { useLocation } from 'umi';

function MyPage(props) {
  const { state } = useLocation();
  console.log('props', state);

  return <div>{state.from}</div>;
}

export default MyPage;
