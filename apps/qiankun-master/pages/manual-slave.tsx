import { loadMicroApp } from 'qiankun';
import { useEffect, useRef } from 'react';
export default function ManualSlavePage() {
  const divRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const app = loadMicroApp({
      name: 'slave',
      container: divRef.current!,
      entry: 'http://127.0.0.1:5555',
      props: { brand: 'qiankun' },
    });

    app?.getStatus?.({ name: 'kuitos' });

    console.log(app);

    return async () => {
      await app.unmount();
    };
  }, []);

  return <div ref={divRef}></div>;
}
