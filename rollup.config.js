import babel from 'rollup-plugin-babel';

export default {
  entry: 'src/index.js',
  plugins: [
    babel({
      presets: ['es2015-rollup'],
      exclude: 'node_modules/**',
    }),
  ],
};
