export default {
  model: {},
  initialState: {},
  qiankun: {
    slave: {},
  },
  base: 'manual-slave',
  routes: [
    { path: '/home', component: 'home' },
    { path: '/count', component: 'count' },
    { path: '/nav', component: 'nav' },
    { path: '/basename', component: 'basename' },
  ],
  hash: false,
  mfsu: false,
};
