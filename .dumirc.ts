import { defineConfig } from 'dumi';
import { readdirSync } from 'fs';
import { join } from 'path';
// more example about dumi https://github.com/thundersdata-frontend/td-design
// https://github.com/ant-design/pro-components/blob/master/.dumirc.ts

// @ts-ignore
import { homepage, name } from './package.json';

const headPkgList: string[] = [];
// utils must build before core
// runtime must build before renderer-react
const pkgList = readdirSync(join(__dirname, 'packages')).filter(
  (pkg) => pkg.charAt(0) !== '.' && !headPkgList.includes(pkg),
);

const tailPkgList = pkgList.map((path) => {
  return {
    src: `packages/${path}/src/`,
    path,
  };
});


const alias = pkgList.reduce(
  (pre, pkg) => {
    pre[`@repo/${pkg}`] = join(__dirname, 'packages', pkg, 'src');
    return {
      ...pre,
    };
  },
  {} as Record<string, string>,
);

console.log(`🌼 alias list \n${Object.keys(alias).join('\n')}`);

// console.log('tailPkgList', pkgList)

const themeConfig = {
  name: 'Next Dev',
  // logo: 'https://gw.alipayobjects.com/zos/hitu-asset/c88e3678-6900-4289-8538-31367c2d30f2/hitu-1609235995955-image.png',
  socialLinks: { github: homepage },
  apiHeader: {
    pkg: name,
    sourceUrl: `{github}/tree/master/src/components/{atomId}/index.tsx`,
    docUrl: `{github}/tree/master/example/docs/components/{atomId}.{locale}.md`,
  },
  footer: 'Made with ❤️ by Next Dev',
};

export default defineConfig({
  // proxy: {
  //   '/backend-api/v2': {
  //     target: '',
  //     changeOrigin: true,
  //     pathRewrite: { '^/backend-api/v2': '/backend-api/v2' },
  //   },
  // },
  // plugins: [require.resolve('@umijs/plugins/dist/tailwindcss')],
  // tailwindcss: {},
  themeConfig: {
    ...themeConfig,
    // nav: [{ title: 'Docs', link: '/packages/utils' }],
  },
  favicons: [
    'https://gw.alipayobjects.com/zos/hitu-asset/c88e3678-6900-4289-8538-31367c2d30f2/hitu-1609235995955-image.png',
  ],
  locales: [
    { id: 'en-US', name: 'English' },
    // { id: 'zh-CN', name: '中文' },
  ],
  alias,
  styles: [
    `html, body { background: transparent;  }

  @media (prefers-color-scheme: dark) {
    html, body { background: #0E1116; }
  }`,
  ],
  // extraBabelPlugins: ['antd-style'],
  codeSplitting: {
    jsStrategy: 'granularChunks',
  },
  fastRefresh: true,
  ssr: false,
  exportStatic: {},
  mfsu: {
    exclude: ['dumi-theme-antd-style', /dumi/, '@ant-design/cssinjs'],
    shared: {
      react: {
        singleton: true,
      },
    },
  },
  // mfsu: false,
  resolve: {
    // Configure the entry file path, API parsing will start from here
    // entryFile: './packages/utils/src/index.ts',
    // auto generate docs
    atomDirs: [
      ...tailPkgList.map(({ src, path }) => ({
        type: path,
        dir: src,
      })),
    ],
  },

  chainWebpack(config, { webpack }) {
    config.resolve.alias.batch(() => {
      return {};
    });

    config.plugin('$global').use(
      // https://webpack.js.org/plugins/provide-plugin/
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
        __DEV__: process.env.NODE_ENV !== 'production' || true,
      }),
    );

    return config;
  },
});
