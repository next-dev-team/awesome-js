export const qiankun = {
  master: {
    routes: [
      {
        path: '/nav',
        microApp: 'slave',
        mode: 'match',
      },
      {
        path: '/count',
        microApp: 'slave',
        mode: 'match',
      },
      {
        path: '/prefix',
        microApp: 'slave',
      },
      {
        path: '/*',
        microApp: 'slave',
      },
    ],
  },
};


const fetchInitialData = async () => {
  return {
    name: 'master',
  };
};



export async function getInitialState() {
  const initialData = await fetchInitialData();
  return initialData;
}
