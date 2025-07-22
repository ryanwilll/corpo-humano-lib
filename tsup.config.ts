import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/components/Corpo/index.ts'],
  format: ['esm', 'cjs'],
  dts: true,
  sourcemap: true,
  clean: true,
  external: ['react', 'react-dom'],
});
