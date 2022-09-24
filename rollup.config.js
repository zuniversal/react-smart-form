import json from '@rollup/plugin-json'// 
import resolve from '@rollup/plugin-node-resolve'// 
import commonjs from '@rollup/plugin-commonjs'// 
import { terser } from 'rollup-plugin-terser'// 

export default [
  {
    input: 'index.js',  
    plugins: [resolve(), commonjs(), json(),],  
    output: {
      file: 'dist.umd.js',  
      format: 'umd',  
      name: 'Index', 
      banner: '/** 庄宇彬介绍 **/',
    },  
  },
  {
    input: 'index.js',  
    plugins: [resolve(), commonjs(), json(),],  
    output: {
      file: 'dist.es.js',  
      format: 'es',  
      name: 'Index', 
      banner: '/** 庄宇彬介绍 **/',
    },  
  },
]