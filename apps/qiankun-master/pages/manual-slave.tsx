import { useModel } from '@umijs/max';
import { loadMicroApp } from 'qiankun';
import { useEffect, useRef } from 'react';
export default function ManualSlavePage() {
  const divRef = useRef<HTMLDivElement>(null);
  const initialState = useModel('@@initialState');

  useEffect(() => {
    const app = loadMicroApp({
      name: 'slave',
      container: divRef.current!,
      entry: 'http://127.0.0.1:5555',
      props: {
        ...initialState,
      },
    });

    return () => {
      app.unmount();
    };
  }, []);
  console.log('master', initialState);

  return <div ref={divRef}></div>;
}
