import { createRequire } from 'node:module';
import type { NextConfig } from 'next';

const require = createRequire(import.meta.url);
const wgslLoader = require.resolve('@vgpu/wgsl/loader-webpack');

const nextConfig: NextConfig = {
  transpilePackages: ['vgpu', '@vgpu/core', '@vgpu/wgsl', '@vgpu/wgsl-std'],
  turbopack: {
    rules: {
      '*.wgsl': {
        loaders: [wgslLoader],
        as: '*.js',
      },
    },
  },
  webpack(config) {
    config.module.rules.push({ test: /\.wgsl$/, use: [wgslLoader] });
    return config;
  },
};
export default nextConfig;
