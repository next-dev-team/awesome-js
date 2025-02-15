import { connectMaster, useLocation, useModel } from 'umi';

function MyPage(props) {
  const { state } = useLocation();
  const d = useModel('@@qiankunStateFromMaster');
  console.log('props', d);
  return (
    <button
      onClick={() => {
        props.setGlobalState({
          name: 'ss',
        });
      }}
    >
      test
    </button>
  );
}

export default connectMaster(MyPage);
