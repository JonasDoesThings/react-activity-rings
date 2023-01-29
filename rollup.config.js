import packageJson from './package.json' assert {type: 'json'};

import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import terser from '@rollup/plugin-terser';
import postcss from 'rollup-plugin-postcss';
import commonjs from '@rollup/plugin-commonjs';
import analyze from 'rollup-plugin-analyzer';

export default {
  input: 'src/index.ts',
  output: [
    {
      file: packageJson.module,
      format: 'es',
      sourcemap: true,
    },
    {
      file: packageJson.main,
      format: 'cjs',
      sourcemap: true,
    },
  ],
  external: ['react'],
  plugins: [
    peerDepsExternal(),
    commonjs({
      include: 'node_modules/**',
    }),
    postcss({
      plugins: [],
      modules: true,
      namedExports: true, // this line is important
    }),
    resolve({
      browser: true,
      extensions: ['.js', '.ts', '.tsx'],
    }),
    typescript({
      tsconfig: './tsconfig.json',
      declaration: true,
    }),
    terser(),
    analyze({
      summaryOnly: true,
    }),
  ],
};
