import { defineConfig } from '@umijs/max';

export default defineConfig({
  initialState: {},
  model: {},
  qiankun: {
    master: {
      apps: [
        {
          name: 'slave',
          entry: 'http://127.0.0.1:5555', // your slave app address
          props: {
            accountOnClick: (event) => {
              console.log(event)

            },
            accountName: 'Alex',
            accountAge: 112,
          },
        },
        {
          name: 'slave-app2',
          entry: 'http://127.0.0.1:7002', // your slave app address
        },
      ],
    },
    slave: {},
  },
  base: '/',
  routes: [
    { path: '/', redirect: '/home' },
    { path: '/home', component: 'index' },
    { path: '/nav', component: 'never' },
    {
      path: '/slave/*',
      microApp: 'slave',
    },
    {
      path: '/slave-mf/*',
      microApp: 'slave-mf',
    },
    {
      path: '/animal',
      routes: [
        {
          path: '/animal/ant/*',
          microApp: 'slave-app2',
        },
      ],
    },
    {
      path: '/manual-slave/*',
      component: 'manual-slave',
    },
  ],
  mfsu: false,
});
