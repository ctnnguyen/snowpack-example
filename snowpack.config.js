/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mode: 'development',
  mount: {
    public: { url: '/', static: true },
    src: { url: '/dist' },
  },
  plugins: [
    '@snowpack/plugin-react-refresh',
    '@snowpack/plugin-dotenv',
    [
      '@snowpack/plugin-typescript',
      {
        args: '--project tsconfig.json'
      },
    ],
  ],
  routes: [
    /* Enable an SPA Fallback in development: */
    { 'match': 'routes', 'src': '.*', 'dest': '/index.html' },
  ],
  optimize: {
    /* Example: Bundle your final build: */
    // bundle: true,
    //   minify: true,
    //   target: 'es2018',
  },
  packageOptions: {
    polyfillNode: true,
    types: true,
  },
  devOptions: {
    hostname: 'localhost',
    port: 1234,
    hmr: true,
  },
  buildOptions: {
    out: 'build',
    sourcemap: true,
  },
  exclude: [
    '**/*.test.ts',
    '**/*.test.tsx',
  ]
};
